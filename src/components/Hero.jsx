import { Button } from "@/components/Button"
import { HeroBackground } from "@/components/HeroBackground"
import blurCyanImage from "@/images/blur-cyan.png"
import blurIndigoImage from "@/images/blur-indigo.png"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter"
import { scrollToAnchor } from "@/utils/navigation"
import { useSyntaxHighlighterStyle } from "@/hooks/useSyntaxHighlighterStyle"

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  const router = useRouter()

  useEffect(() => {
    // Handle anchor links on page load
    if (router.pathname === "/" && typeof window !== "undefined") {
      const hash = window.location.hash.slice(1) // Remove the #
      if (hash) {
        setTimeout(() => {
          scrollToAnchor(hash, router)
        }, 100)
      }
    }
  }, [router.pathname])

  const handleNavigation = (href, anchor, e) => {
    e.preventDefault()
    scrollToAnchor(anchor, router)
  }

  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Test IO Guides
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Test IO is a leading crowdtesting platform empowering companies to achieve software
                quality by harnessing a global community of skilled testers to thoroughly assess and
                enhance the functionality, usability, and performance of their applications.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/#getting-started" onClick={(e) => handleNavigation("/", "getting-started", e)}>
                  Get Started
                </Button>
                <Button
                  href="/#integrations"
                  variant="secondary"
                  onClick={(e) => handleNavigation("/", "integrations", e)}
                >
                  Integrations
                </Button>
                <Button
                  href="/#api-reference"
                  variant="secondary"
                  onClick={(e) => handleNavigation("/", "api-reference", e)}
                >
                  API Reference
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative pointer-events-none">
              <Image
                className="absolute -right-64 -top-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-40 -right-44"
                src={blurIndigoImage}
                alt=""
                width={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
            </div>
            <div className="relative z-10">
              <CodeSample />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CodeSample() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const codeStyle = useSyntaxHighlighterStyle(true) // Force dark theme

  const codeSnippets = {
    javascript: `const response = await fetch(
  'https://api.test.io/customer/v2/products/1/exploratory_tests',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Token YOUR_API_TOKEN',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      exploratory_test: {
        test_title: 'Checkout Flow Test',
        goal: 'Validate the checkout process',
        testing_type: 'focused',
        test_environment: { id: 123 },
        features: [{ id: 456 }]
      }
    })
  }
);

const test = await response.json();`,
    python: `import requests

response = requests.post(
    'https://api.test.io/customer/v2/products/1/exploratory_tests',
    headers={
        'Authorization': 'Token YOUR_API_TOKEN',
        'Content-Type': 'application/json',
    },
    json={
        'exploratory_test': {
            'test_title': 'Checkout Flow Test',
            'goal': 'Validate the checkout process',
            'testing_type': 'focused',
            'test_environment': {'id': 123},
            'features': [{'id': 456}]
        }
    }
)

test = response.json()`,
    ruby: `require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.test.io/customer/v2/products/1/exploratory_tests')
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Post.new(uri.path)
request['Authorization'] = 'Token YOUR_API_TOKEN'
request['Content-Type'] = 'application/json'
request.body = {
  exploratory_test: {
    test_title: 'Checkout Flow Test',
    goal: 'Validate the checkout process',
    testing_type: 'focused',
    test_environment: { id: 123 },
    features: [{ id: 456 }]
  }
}.to_json

response = http.request(request)
test = JSON.parse(response.body)`,
    bash: `curl -X POST "https://api.test.io/customer/v2/products/1/exploratory_tests" \\
  -H "Authorization: Token YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "exploratory_test": {
      "test_title": "Checkout Flow Test",
      "goal": "Validate the checkout process",
      "testing_type": "focused",
      "test_environment": { "id": 123 },
      "features": [{ "id": 456 }]
    }
  }'`,
    php: `<?php

$ch = curl_init('https://api.test.io/customer/v2/products/1/exploratory_tests');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Token YOUR_API_TOKEN',
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'exploratory_test' => [
            'test_title' => 'Checkout Flow Test',
            'goal' => 'Validate the checkout process',
            'testing_type' => 'focused',
            'test_environment' => ['id' => 123],
            'features' => [['id' => 456]]
        ]
    ])
]);

$response = curl_exec($ch);
$test = json_decode($response, true);
curl_close($ch);`,
    go: `package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

func main() {
    data := map[string]interface{}{
        "exploratory_test": map[string]interface{}{
            "test_title":    "Checkout Flow Test",
            "goal":          "Validate the checkout process",
            "testing_type":   "focused",
            "test_environment": map[string]int{"id": 123},
            "features":      []map[string]int{{"id": 456}},
        },
    }
    
    jsonData, _ := json.Marshal(data)
    req, _ := http.NewRequest("POST",
        "https://api.test.io/customer/v2/products/1/exploratory_tests",
        bytes.NewBuffer(jsonData))
    req.Header.Set("Authorization", "Token YOUR_API_TOKEN")
    req.Header.Set("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, _ := client.Do(req)
    defer resp.Body.Close()
}`,
  }

  const languages = [
    { id: "javascript", label: "api.js" },
    { id: "python", label: "api.py" },
    { id: "ruby", label: "api.rb" },
    { id: "bash", label: "api.sh" },
    { id: "php", label: "api.php" },
    { id: "go", label: "api.go" },
  ]

  const currentCode = codeSnippets[selectedLanguage] || codeSnippets.javascript

  return (
    <div className="relative mt-8 lg:mt-12 w-full">
      <div className="w-full">
        {/* Window frame with traffic lights */}
        <div className="relative rounded-lg border border-sky-500/30 bg-gradient-to-r from-slate-950 to-slate-900 backdrop-blur-sm shadow-[0_0_25px_rgba(56,189,248,0.2),0_0_50px_rgba(56,189,248,0.1)] min-h-[280px] w-full">
          {/* Top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent rounded-t-lg" />
          
          {/* Traffic lights container */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-800/30 rounded-t-lg">
            <TrafficLightsIcon className="h-3.5 w-auto stroke-slate-400/80" />
            <div className="flex-1" />
          </div>
          
          {/* File tabs */}
          <div className="px-4 pt-3 pb-3">
            <div className="flex space-x-2 text-xs flex-wrap gap-2">
              {languages.map((lang) => {
                const isActive = selectedLanguage === lang.id
                return (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`flex h-6 rounded-full transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300"
                        : "text-slate-500 hover:text-slate-400"
                    }`}
                    type="button"
                  >
                    <div
                      className={`flex items-center rounded-full px-2.5 ${
                        isActive ? "bg-slate-800" : ""
                      }`}
                    >
                      {lang.label}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* Code content area */}
          <div className="relative overflow-hidden rounded-b-lg">
            {/* Bottom highlight */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent z-10 rounded-b-lg" />
            
            <div className="w-full max-w-full overflow-x-auto min-h-[200px] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-600/50 [&::-webkit-scrollbar-track]:bg-slate-800/50 [&_pre]:!overflow-x-auto [&_pre]:!whitespace-pre [&_code]:!whitespace-pre">
              {Object.keys(codeStyle).length > 0 && (
                <ReactSyntaxHighlighter
                  language={selectedLanguage === "bash" ? "bash" : selectedLanguage}
                  style={codeStyle}
                  customStyle={{
                    background: "transparent",
                    margin: 0,
                    padding: "0.75em 1em",
                    fontSize: "0.8125rem",
                    lineHeight: "1.5",
                    overflow: "visible",
                    minHeight: "200px",
                  }}
                  PreTag="div"
                  showLineNumbers={true}
                  lineNumberStyle={{
                    display: "inline-block",
                    minWidth: "2em",
                    paddingRight: "0.75em",
                    textAlign: "right",
                    color: "rgb(99, 119, 119)",
                    fontStyle: "italic",
                    userSelect: "none",
                    textDecoration: "none",
                  }}
                >
                  {currentCode}
                </ReactSyntaxHighlighter>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
