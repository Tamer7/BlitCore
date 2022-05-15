import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FeaturesBg from "../images/50.png";
import FeaturesElement from "../images/image123.jpg";

function CSDView() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section One */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mt-12">Custom Software Development</h1>
          </div>

          <div>
            <p className="text-xl mt-6 text-gray-600 text-center">
              Changing Dreams Into Reality
            </p>
          </div>

          <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h4 mt-6 mb-4">
              Beauty of Custom Software Development
            </h1>
          </div>

          {/* Section content */}

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}

              <div className="mb-8 md:mb-0">
                <div>
                  <img
                    className=" w-full"
                    src={FeaturesElement}
                    width="300"
                    height="44"
                    alt="Element"
                  />
                </div>

                <div></div>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}

                <div className="relative inline-flex flex-col">
                  <div className="font-bold leading-snug tracking-tight text-left mb-1">
                    <h1 className="font-bold text-2xl">Lorem Ipsum</h1>
                  </div>
                  <br></br>
                  <div className="relative inline-flex flex-col text-left">
                    <p className="text-gray-600 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                  <br></br>

                  <div className="relative inline-flex flex-col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End of Section One */}

        {/* Section Two */}
        <div>
          <p className="text-xl mt-20 text-gray-600 text-center">
            World Class Team In Creating Customized Software
          </p>
        </div>

        <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h4 mt-6 mb-4">
            Beauty of Custom Software Development
          </h1>
        </div>

        <div className="md:grid md:grid-cols-12 md:gap-6">
          {/* Content */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
            data-aos="fade-right"
          >
            {/* Tabs buttons */}

            <div className="mb-8 md:mb-0">
              <div>
                <div className="font-bold leading-snug tracking-tight text-left mb-1">
                  <h1 className="font-bold text-2xl">Lorem Ipsum</h1>
                </div>
                <p className="text-gray-600 mt-5 leading-relaxed">
                  Every corporate organization requires multi-level enterprise
                  web solutions to fulfill business needs. Company is well
                  versed with developing enterprise web portals, eCommerce
                  solutions, B2B and B2C applications, ERP and CRM software
                  apps, Reporting, Billing and Secure Financial Transaction
                  Processing Systems, etc. Our developers have been involved
                  with latest web technologies which help organizations to
                  optimize operational costs and improve delivery.
                </p>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  We are specialized in creating different levels of web
                  solutions for the fulfillment of various needs. Personalized
                  enterprise web portals are developed along with different
                  e-commerce solutions, CRM and ERP software apps, B2B and B2C
                  applications, reporting, and much more.
                </p>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  The development of various web solutions and our enterprise IT
                  is based on the latest web technologies. Not only are they
                  secure but also strong and resourceful. Consequently, the
                  total operational cost is reduced and operational efficiency
                  is enhanced.
                </p>
                <ul className="text-gray-600 mt-5 leading-relaxed">
                  <li>CRM Software Development</li>
                  <li>Custom ERP Software Development</li>
                  <li>Business System Integration</li>
                  <li>Enterprise Mobility Solutions</li>
                  <li>Full-Cycle IT Consultation</li>
                </ul>
              </div>

              <div></div>
            </div>
          </div>

          {/* Tabs items */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
            <div className="relative flex flex-col text-center lg:text-right">
              {/* Item 1 */}

              <div className="relative inline-flex flex-col">
                <br></br>
                <div className="relative inline-flex flex-col text-left">
                  <img
                    className=" w-full"
                    src={FeaturesElement}
                    width="300"
                    height="44"
                    alt="Element"
                  />
                </div>
                <br></br>

                <div className="relative inline-flex flex-col"></div>
              </div>
            </div>
          </div>
        </div>

        {/* End of Section Two */}

        {/* Section Three */}
        <div className="mt-20 "></div>

        <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h4 mt-6 mb-4">
            Beauty of Custom Software Development
          </h1>
        </div>

        <div className="grid lg:grid-cols-3">
          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src={FeaturesElement}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Software Development</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src={FeaturesElement}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Application Migration</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src={FeaturesElement}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">SASS Applications</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
        {/* End of Section Three */}

        {/* Section Four */}
        <div className="max-w-1xl mx-auto mt-20 text-center pb-12 md:pb-16">
          <h1 className="h4 mt-20 mb-4">Our Technology Stack</h1>
        </div>

        {/* Section content */}

        {/* Section content */}

        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" ></div>


    <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none flex">
        <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-100 dark:border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h5 class="text-l font-bold leading-none text-gray-900 dark:text-black">
              Back End Development
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9ImdvcWZ1MVpObUVuVXJRREpFUTFiVWFfbDc1T0VVSmtQQWs0X2dyMSIgeDE9IjEwLjQ1OCIgeDI9IjI2LjMxNCIgeTE9IjEyLjk3MiIgeTI9IjI2LjI3NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzI2YWJlNyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA4NmRiZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNnb3FmdTFaTm1FblVyUURKRVExYlVhX2w3NU9FVUprUEFrNF9ncjEpIiBkPSJNMjQuMDQ3LDVjLTEuNTU1LDAuMDA1LTIuNjMzLDAuMTQyLTMuOTM2LDAuMzY3Yy0zLjg0OCwwLjY3LTQuNTQ5LDIuMDc3LTQuNTQ5LDQuNjdWMTRoOXYyIEgxNS4yMmgtNC4zNWMtMi42MzYsMC00Ljk0MywxLjI0Mi01LjY3NCw0LjIxOWMtMC44MjYsMy40MTctMC44NjMsNS41NTcsMCw5LjEyNUM1Ljg1MSwzMi4wMDUsNy4yOTQsMzQsOS45MzEsMzRoMy42MzJ2LTUuMTA0IGMwLTIuOTY2LDIuNjg2LTUuODk2LDUuNzY0LTUuODk2aDcuMjM2YzIuNTIzLDAsNS0xLjg2Miw1LTQuMzc3di04LjU4NmMwLTIuNDM5LTEuNzU5LTQuMjYzLTQuMjE4LTQuNjcyIEMyNy40MDYsNS4zNTksMjUuNTg5LDQuOTk0LDI0LjA0Nyw1eiBNMTkuMDYzLDljMC44MjEsMCwxLjUsMC42NzcsMS41LDEuNTAyYzAsMC44MzMtMC42NzksMS40OTgtMS41LDEuNDk4IGMtMC44MzcsMC0xLjUtMC42NjQtMS41LTEuNDk4QzE3LjU2Myw5LjY4LDE4LjIyNiw5LDE5LjA2Myw5eiI+PC9wYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iZ29xZnUxWk5tRW5VclFESkVRMWJVYl9sNzVPRVVKa1BBazRfZ3IyIiB4MT0iMzUuMzM0IiB4Mj0iMjMuNTE3IiB5MT0iMzcuOTExIiB5Mj0iMjEuMDM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmViNzA1Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZkYTFjIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2dvcWZ1MVpObUVuVXJRREpFUTFiVWJfbDc1T0VVSmtQQWs0X2dyMikiIGQ9Ik0yMy4wNzgsNDNjMS41NTUtMC4wMDUsMi42MzMtMC4xNDIsMy45MzYtMC4zNjdjMy44NDgtMC42Nyw0LjU0OS0yLjA3Nyw0LjU0OS00LjY3VjM0aC05di0yIGg5LjM0M2g0LjM1YzIuNjM2LDAsNC45NDMtMS4yNDIsNS42NzQtNC4yMTljMC44MjYtMy40MTcsMC44NjMtNS41NTcsMC05LjEyNUM0MS4yNzQsMTUuOTk1LDM5LjgzMSwxNCwzNy4xOTQsMTRoLTMuNjMydjUuMTA0IGMwLDIuOTY2LTIuNjg2LDUuODk2LTUuNzY0LDUuODk2aC03LjIzNmMtMi41MjMsMC01LDEuODYyLTUsNC4zNzd2OC41ODZjMCwyLjQzOSwxLjc1OSw0LjI2Myw0LjIxOCw0LjY3MiBDMTkuNzE5LDQyLjY0MSwyMS41MzYsNDMuMDA2LDIzLjA3OCw0M3ogTTI4LjA2MywzOWMtMC44MjEsMC0xLjUtMC42NzctMS41LTEuNTAyYzAtMC44MzMsMC42NzktMS40OTgsMS41LTEuNDk4IGMwLjgzNywwLDEuNSwwLjY2NCwxLjUsMS40OThDMjkuNTYzLDM4LjMyLDI4Ljg5OSwzOSwyOC4wNjMsMzl6Ij48L3BhdGg+PC9zdmc+"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      Python Development
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Django, Flask, Tensorflow
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjYjVjNGUwIiBkPSJNMzIgMTRBMzEgMTguMTc0IDAgMSAwIDMyIDUwLjM0OEEzMSAxOC4xNzQgMCAxIDAgMzIgMTRaIj48L3BhdGg+PHBhdGggZmlsbD0iI2NlZDllZCIgZD0iTTMyLDE0QzE0Ljg3OSwxNCwxLDIyLjEzNywxLDMyLjE3NHMxMy44NzksMTguMTc0LDMxLDE4LjE3NHMzMS04LjEzNywzMS0xOC4xNzRTNDkuMTIxLDE0LDMyLDE0eiBNMzIsNDUuMzQ4Yy0xNS4zMjIsMC0yNi02Ljk0Mi0yNi0xMy4xNzRDNiwyNS45NDMsMTYuNjc4LDE5LDMyLDE5czI2LDYuOTQzLDI2LDEzLjE3NEM1OCwzOC40MDUsNDcuMzIyLDQ1LjM0OCwzMiw0NS4zNDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzhkNmM5ZSIgZD0iTTQyLjQzNSAyNi40MzVsLTIuNzMzIDE0LjgyNmgzLjU2NmwuNzEtNC4wNDNoMi4yMTljNC42NDUgMCA3LjE3Mi0xLjA3NiA4LjExNy01LjA2Mi44MTMtMy40MjUtMS4yNjQtNS43Mi00LjY5LTUuNzJINDIuNDM1ek00Ni43ODYgMzQuNTIyaC0yLjMwNWwxLjAxOC01LjM5MWgyLjc3OGMyLjMwMiAwIDIuNzg2IDEuMDM4IDIuNjY2IDIuMTkzQzUwLjYzNCAzNC4yOTcgNDguNzggMzQuNTIyIDQ2Ljc4NiAzNC41MjJ6TTE0LjEzIDI2LjQzNWwtMi43MzMgMTQuODI2aDMuNTY2bC43MS00LjA0M2gyLjIxOWM0LjY0NSAwIDcuMTcyLTEuMDc2IDguMTE3LTUuMDYyLjgxMy0zLjQyNS0xLjI2NC01LjcyLTQuNjktNS43MkgxNC4xM3pNMTguNDgxIDM0LjUyMmgtMi4zMDVsMS4wMTgtNS4zOTFoMi43NzhjMi4zMDIgMCAyLjc4NiAxLjAzOCAyLjY2NiAyLjE5M0MyMi4zMjkgMzQuMjk3IDIwLjQ3NiAzNC41MjIgMTguNDgxIDM0LjUyMnpNMzkuMzExIDI3LjQxNWMtLjc2Mi0uNjk4LTIuMTA0LS45OC00LjEwNS0uOThoLTMuMTUzbDEuMTI0LTUuMzkxSDI5LjY0bC0zLjM3OSAxNi4xNzRoMy41MzhsMS43MDYtOC4wODdoMi44MjhjLjkwMiAwIDEuNDk3LjE1MSAxLjc3NS40NDkuMjc2LjMwMS4zMzcuODY3LjE3NyAxLjY4NmwtMS4yOTEgNS45NTJoMy41OTNsMS4zOTktNi40NEM0MC4yODYgMjkuMjM0IDQwLjA1OSAyOC4xMDIgMzkuMzExIDI3LjQxNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjOGQ2YzlmIiBkPSJNMzIgNTEuMzQ4Yy0xNy42NDUgMC0zMi04LjYwMi0zMi0xOS4xNzRTMTQuMzU1IDEzIDMyIDEzYzE3LjY0NSAwIDMyIDguNjAyIDMyIDE5LjE3NFM0OS42NDUgNTEuMzQ4IDMyIDUxLjM0OHpNMzIgMTVDMTUuNDU4IDE1IDIgMjIuNzA0IDIgMzIuMTc0czEzLjQ1OCAxNy4xNzQgMzAgMTcuMTc0IDMwLTcuNzA0IDMwLTE3LjE3NFM0OC41NDIgMTUgMzIgMTV6TTU4LjY5MyA1MC42NjdjLS4zMyAwLS42NTMtLjE2My0uODQ1LS40NjNsLTEuMDc0LTEuNjg3Yy0uMjk3LS40NjYtLjE1OS0xLjA4NC4zMDctMS4zODEuNDY0LS4yOTYgMS4wODMtLjE2IDEuMzgxLjMwN2wxLjA3NCAxLjY4N2MuMjk3LjQ2Ni4xNTkgMS4wODQtLjMwNyAxLjM4MUM1OS4wNjMgNTAuNjE2IDU4Ljg3NyA1MC42NjcgNTguNjkzIDUwLjY2N3pNNTQuNDQ2IDUzLjAwNGMtLjM3NSAwLS43MzQtLjIxMi0uOTA1LS41NzNsLS44NTQtMS44MDljLS4yMzUtLjQ5OS0uMDIxLTEuMDk2LjQ3OC0xLjMzMS41MDEtLjIzNyAxLjA5NS0uMDIxIDEuMzMxLjQ3OGwuODU0IDEuODA5Yy4yMzUuNDk5LjAyMSAxLjA5Ni0uNDc4IDEuMzMxQzU0LjczNCA1Mi45NzQgNTQuNTg5IDUzLjAwNCA1NC40NDYgNTMuMDA0ek00OS45NjkgNTQuODE3Yy0uNDE0IDAtLjgwMi0uMjYtLjk0NS0uNjczbC0uNjU0LTEuODkxYy0uMTgxLS41MjIuMDk3LTEuMDkyLjYxOC0xLjI3MnMxLjA5MS4wOTcgMS4yNzIuNjE4bC42NTQgMS44OTFjLjE4MS41MjItLjA5NyAxLjA5Mi0uNjE4IDEuMjcyQzUwLjE4OCA1NC44IDUwLjA3NyA1NC44MTcgNDkuOTY5IDU0LjgxN3pNNDUuMzQ0IDU2LjE3MWMtLjQ1MSAwLS44Ni0uMzA4LS45NzEtLjc2NmwtLjQ3LTEuOTQ0Yy0uMTMtLjUzNi4yLTEuMDc3LjczNy0xLjIwNi41MjktLjEzMSAxLjA3Ni4yIDEuMjA2LjczN2wuNDcgMS45NDRjLjEzLjUzNi0uMiAxLjA3Ny0uNzM3IDEuMjA2QzQ1LjUwMSA1Ni4xNjIgNDUuNDIyIDU2LjE3MSA0NS4zNDQgNTYuMTcxek00MC42MjEgNTcuMDkzYy0uNDg3IDAtLjkxNC0uMzU2LS45ODgtLjg1M2wtLjI5Ni0xLjk3OWMtLjA4MS0uNTQ2LjI5NS0xLjA1NS44NDItMS4xMzcuNTUyLS4wNzQgMS4wNTYuMjk2IDEuMTM3Ljg0MmwuMjk2IDEuOTc5Yy4wODEuNTQ2LS4yOTUgMS4wNTUtLjg0MiAxLjEzN0M0MC43MiA1Ny4wODkgNDAuNjcgNTcuMDkzIDQwLjYyMSA1Ny4wOTN6TTM1Ljg0MSA1Ny41OTZjLS41MjIgMC0uOTYzLS40MDYtLjk5Ny0uOTM2bC0uMTI5LTEuOTk2Yy0uMDM1LS41NTEuMzgzLTEuMDI2LjkzNC0xLjA2My41NDQtLjAyNyAxLjAyNy4zODMgMS4wNjMuOTM0bC4xMjkgMS45OTZjLjAzNS41NTEtLjM4MyAxLjAyNi0uOTM0IDEuMDYzQzM1Ljg4NSA1Ny41OTUgMzUuODYyIDU3LjU5NiAzNS44NDEgNTcuNTk2eiI+PC9wYXRoPjxnPjxwYXRoIGZpbGw9IiM4ZDZjOWYiIGQ9Ik0yMS44NjIsMjEuMTYxYy0wLjQ0OCwwLTAuODU2LTAuMzA0LTAuOTctMC43NTljLTAuMTMzLTAuNTM2LDAuMTk0LTEuMDc5LDAuNzI5LTEuMjEyIGMxLjM0NS0wLjMzNCwyLjc2Ni0wLjYxOCw0LjIyNC0wLjg0NWMwLjU0Ny0wLjA4NCwxLjA1NywwLjI4OSwxLjE0MiwwLjgzNGMwLjA4NSwwLjU0Ni0wLjI4OSwxLjA1Ny0wLjgzNCwxLjE0MiBjLTEuNCwwLjIxOC0yLjc2MiwwLjQ5LTQuMDQ5LDAuODFDMjIuMDIzLDIxLjE1MiwyMS45NDIsMjEuMTYxLDIxLjg2MiwyMS4xNjF6Ij48L3BhdGg+PC9nPjxnPjxwYXRoIGZpbGw9IiM4ZDZjOWYiIGQ9Ik02Ljk5OSwyOS45OTdjLTAuMTYzLDAtMC4zMjgtMC4wNC0wLjQ4MS0wLjEyNGMtMC40ODEtMC4yNjYtMC42NTktMC44NjktMC4zOTYtMS4zNTIgYzAuMTA5LTAuMiwyLjc2Ny00LjkyNSwxMS40MjQtOC4wOTFjMC41MTYtMC4xOTEsMS4wOTIsMC4wNzcsMS4yODIsMC41OTZjMC4xOSwwLjUxOS0wLjA3NywxLjA5My0wLjU5NiwxLjI4MiBjLTcuODg0LDIuODgzLTEwLjMzNCw3LjEzMy0xMC4zNTcsNy4xNzVDNy42OTIsMjkuODEyLDcuMzUsMjkuOTk3LDYuOTk5LDI5Ljk5N3oiPjwvcGF0aD48L2c+PC9zdmc+"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      PHP
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Laravel, Symphony
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRjQ0MzM2IiBkPSJNMjMuNjUsMjQuODk4Yy0wLjk5OC0xLjYwOS0xLjcyMi0yLjk0My0yLjcyNS01LjQ1NUMxOS4yMjksMTUuMiwzMS4yNCwxMS4zNjYsMjYuMzcsMy45OTljMi4xMTEsNS4wODktNy41NzcsOC4yMzUtOC40NzcsMTIuNDczQzE3LjA3LDIwLjM3LDIzLjY0NSwyNC44OTgsMjMuNjUsMjQuODk4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGNDQzMzYiIGQ9Ik0yMy44NzgsMTcuMjdjLTAuMTkyLDIuNTE2LDIuMjI5LDMuODU3LDIuMjk5LDUuNjk1YzAuMDU2LDEuNDk2LTEuNDQ3LDIuNzQzLTEuNDQ3LDIuNzQzczIuNzI4LTAuNTM2LDMuNTc5LTIuODE4YzAuOTQ1LTIuNTM0LTEuODM0LTQuMjY5LTEuNTQ4LTYuMjk4YzAuMjY3LTEuOTM4LDYuMDMxLTUuNTQzLDYuMDMxLTUuNTQzUzI0LjMxMSwxMS42MTEsMjMuODc4LDE3LjI3eiI+PC9wYXRoPjxnPjxwYXRoIGZpbGw9IiMxNTY1QzAiIGQ9Ik0zMi4wODQgMjUuMDU1YzEuNzU0LS4zOTQgMy4yMzMuNzIzIDMuMjMzIDIuMDEgMCAyLjkwMS00LjAyMSA1LjY0My00LjAyMSA1LjY0M3M2LjIyNS0uNzQyIDYuMjI1LTUuNTA1QzM3LjUyMSAyNC4wNTMgMzQuNDY0IDIzLjI2NiAzMi4wODQgMjUuMDU1ek0yOS4xMjkgMjcuMzk1YzAgMCAxLjk0MS0xLjM4MyAyLjQ1OC0xLjkwMi00Ljc2MyAxLjAxMS0xNS42MzggMS4xNDctMTUuNjM4LjI2OSAwLS44MDkgMy41MDctMS42MzggMy41MDctMS42MzhzLTcuNzczLS4xMTItNy43NzMgMi4xODFDMTEuNjgzIDI4LjY5NSAyMS44NTggMjguODY2IDI5LjEyOSAyNy4zOTV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTI3LjkzNSwyOS41NzFjLTQuNTA5LDEuNDk5LTEyLjgxNCwxLjAyLTEwLjM1NC0wLjk5M2MtMS4xOTgsMC0yLjk3NCwwLjk2My0yLjk3NCwxLjg4OWMwLDEuODU3LDguOTgyLDMuMjkxLDE1LjYzLDAuNTcyTDI3LjkzNSwyOS41NzF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTE4LjY4NiwzMi43MzljLTEuNjM2LDAtMi42OTUsMS4wNTQtMi42OTUsMS44MjJjMCwyLjM5MSw5Ljc2LDIuNjMyLDEzLjYyNywwLjIwNWwtMi40NTgtMS42MzJDMjQuMjcxLDM0LjQwNCwxNy4wMTQsMzQuNTc5LDE4LjY4NiwzMi43Mzl6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTM2LjI4MSwzNi42MzJjMC0wLjkzNi0xLjA1NS0xLjM3Ny0xLjQzMy0xLjU4OGMyLjIyOCw1LjM3My0yMi4zMTcsNC45NTYtMjIuMzE3LDEuNzg0YzAtMC43MjEsMS44MDctMS40MjcsMy40NzctMS4wOTNsLTEuNDItMC44MzlDMTEuMjYsMzQuMzc0LDksMzUuODM3LDksMzcuMDE3QzksNDIuNTIsMzYuMjgxLDQyLjI1NSwzNi4yODEsMzYuNjMyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxNTY1QzAiIGQ9Ik0zOSwzOC42MDRjLTQuMTQ2LDQuMDk1LTE0LjY1OSw1LjU4Ny0yNS4yMzEsMy4wNTdDMjQuMzQxLDQ2LjE2NCwzOC45NSw0My42MjgsMzksMzguNjA0eiI+PC9wYXRoPjwvZz48L3N2Zz4="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      Java
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Spring
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img alt="svgImg" class="w-8 h-8 rounded-full" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMzg4ZTNjIiBkPSJNMTcuMjA0IDE5LjEyMmwtNC45MDcgMi43MTVDMTIuMTEzIDIxLjkzOCAxMiAyMi4xMjYgMTIgMjIuMzI5djUuNDMzYzAgLjIwMy4xMTMuMzkuMjk3LjQ5Mmw0LjkwOCAyLjcxN2MuMTgzLjEwMS40MS4xMDEuNTkzIDBsNC45MDctMi43MTdDMjIuODg3IDI4LjE1MiAyMyAyNy45NjUgMjMgMjcuNzYydi01LjQzM2MwLS4yMDMtLjExMy0uMzktLjI5Ny0uNDkybC00LjkwNi0yLjcxNWMtLjA5Mi0uMDUxLS4xOTUtLjA3Ni0uMjk3LS4wNzYtLjEwMyAwLS4yMDUuMDI1LS4yOTcuMDc2TTQyLjQ1MSAyNC4wMTNsLS44MTguNDUyYy0uMDMxLjAxNy0uMDQ5LjA0OC0uMDQ5LjA4MnYuOTA2YzAgLjAzNC4wMTkuMDY1LjA0OS4wODJsLjgxOC40NTNjLjAzMS4wMTcuMDY4LjAxNy4wOTkgMGwuODE4LS40NTNjLjAzLS4wMTcuMDQ5LS4wNDguMDQ5LS4wODJ2LS45MDZjMC0uMDM0LS4wMTktLjA2NS0uMDUtLjA4MmwtLjgxOC0uNDUyQzQyLjUzNCAyNC4wMDQgNDIuNTE3IDI0IDQyLjUgMjRTNDIuNDY2IDI0LjAwNCA0Mi40NTEgMjQuMDEzIj48L3BhdGg+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZD0iTTM1Ljc1MSwxMy4zNjRsLTIuMzg5LTEuMzMzYy0wLjA3NS0wLjA0Mi0wLjE2Ny0wLjA0MS0wLjI0MSwwLjAwMyBjLTAuMDc0LDAuMDQ0LTAuMTIsMC4xMjMtMC4xMiwwLjIwOUwzMywyMC4yOTVsLTIuMjAzLTEuMjE5QzMwLjcwNSwxOS4wMjUsMzAuNjAyLDE5LDMwLjUsMTljLTAuMTAyLDAtMC4yMDUsMC4wMjUtMC4yOTcsMC4wNzYgaDAuMDAxbC00LjkwNywyLjcxNUMyNS4xMTMsMjEuODkyLDI1LDIyLjA4LDI1LDIyLjI4MnY1LjQzM2MwLDAuMjAzLDAuMTEzLDAuMzksMC4yOTcsMC40OTJsNC45MDgsMi43MTcgYzAuMTgzLDAuMTAxLDAuNDEsMC4xMDEsMC41OTMsMGw0LjkwNy0yLjcxN0MzNS44ODcsMjguMTA2LDM2LDI3LjkxOCwzNiwyNy43MTVWMTMuNzg4QzM2LDEzLjYxMiwzNS45MDQsMTMuNDUsMzUuNzUxLDEzLjM2NHogTTMyLjg2NiwyNi40NThsLTIuMjMsMS4yMzVjLTAuMDgzLDAuMDQ2LTAuMTg2LDAuMDQ2LTAuMjY5LDBsLTIuMjMxLTEuMjM1QzI4LjA1MSwyNi40MTIsMjgsMjYuMzI2LDI4LDI2LjIzNHYtMi40NyBjMC0wLjA5MiwwLjA1MS0wLjE3NywwLjEzNS0wLjIyNGwyLjIzMS0xLjIzNGgtMC4wMDFjMC4wNDItMC4wMjMsMC4wODgtMC4wMzQsMC4xMzUtMC4wMzRjMC4wNDcsMCwwLjA5MywwLjAxMiwwLjEzNSwwLjAzNCBsMi4yMywxLjIzNEMzMi45NDksMjMuNTg3LDMzLDIzLjY3MywzMywyMy43NjV2Mi40N0MzMywyNi4zMjYsMzIuOTQ5LDI2LjQxMiwzMi44NjYsMjYuNDU4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0xNy4yMDQsMTkuMTIyTDEyLDI3Ljc2MmMwLDAuMjAzLDAuMTEzLDAuMzksMC4yOTcsMC40OTJsNC45MDgsMi43MTcgYzAuMTgzLDAuMTAxLDAuNDEsMC4xMDEsMC41OTMsMEwyMywyMi4zMjljMC0wLjIwMy0wLjExMy0wLjM5LTAuMjk3LTAuNDkybC00LjkwNi0yLjcxNWMtMC4wOTItMC4wNTEtMC4xOTUtMC4wNzYtMC4yOTctMC4wNzYgYy0wLjEwMywwLTAuMjA1LDAuMDI1LTAuMjk3LDAuMDc2Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTE3LjIwNCwxOS4xMjJsLTQuOTA3LDIuNzE1QzEyLjExMywyMS45MzgsMTIsMjIuMTI2LDEyLDIyLjMyOWw1LjIwNCw4LjY0MiBjMC4xODMsMC4xMDEsMC40MSwwLjEwMSwwLjU5MywwbDQuOTA3LTIuNzE3QzIyLjg4NywyOC4xNTIsMjMsMjcuOTY1LDIzLDI3Ljc2MmwtNS4yMDMtOC42NGMtMC4wOTItMC4wNTEtMC4xOTUtMC4wNzYtMC4yOTctMC4wNzYgYy0wLjEwMywwLTAuMjA1LDAuMDI1LTAuMjk3LDAuMDc2Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZD0iTTQ3LjcwMyAyMS43OTFsLTQuOTA2LTIuNzE1QzQyLjcwNSAxOS4wMjUgNDIuNjAyIDE5IDQyLjUgMTljLS4xMDIgMC0uMjA1LjAyNS0uMjk3LjA3NmguMDAxbC00LjkwNyAyLjcxNUMzNy4xMTQgMjEuODkyIDM3IDIyLjA4NCAzNyAyMi4yOTR2NS40MTFjMCAuMjA5LjExNC40MDIuMjk3LjUwM2w0LjkwOCAyLjcxN2MuMTg0LjEwMi40MDkuMTAyLjU5MyAwbDIuMjYzLTEuMjUzYy4yMDctLjExNS4yMDYtLjQxMi0uMDAyLS41MjZsLTQuOTI0LTIuNjg3QzQwLjA1MiAyNi40MTIgNDAgMjYuMzI1IDQwIDI2LjIzMXYtMi40NjZjMC0uMDkyLjA1LS4xNzcuMTMtLjIyMWwyLjIzNS0xLjIzNmgtLjAwMWMuMDQyLS4wMjMuMDg4LS4wMzQuMTM1LS4wMzQuMDQ3IDAgLjA5My4wMTIuMTM1LjAzNGwyLjIzNSAxLjIzN2MuMDguMDQ0LjEzLjEyOS4xMy4yMjF2Mi4wMTJjMCAuMDg2LjA0Ni4xNjYuMTIxLjIwOS4wNzUuMDQyLjE2Ny4wNDIuMjQyLS4wMDFsMi4zOTgtMS4zOTNjLjE0OC0uMDg2LjI0LS4yNDUuMjQtLjQxN3YtMS44OEM0OCAyMi4wODUgNDcuODg2IDIxLjg5MiA0Ny43MDMgMjEuNzkxek0xMC43MDMgMjEuNzkxbC00LjkwNi0yLjcxNUM1LjcwNSAxOS4wMjUgNS42MDIgMTkgNS41IDE5Yy0uMTAyIDAtLjIwNS4wMjUtLjI5Ny4wNzZoLjAwMWwtNC45MDcgMi43MTVDLjExNCAyMS44OTIgMCAyMi4wODQgMCAyMi4yOTR2Ny40NjVjMCAuMDg2LjA0Ni4xNjYuMTIxLjIwOS4wNzUuMDQyLjE2Ny4wNDIuMjQyLS4wMDFsMi4zOTgtMS4zOTNDMi45MDkgMjguNDg4IDMgMjguMzI5IDMgMjguMTU3di00LjM5M2MwLS4wOTIuMDUtLjE3Ny4xMy0uMjIxbDIuMjM1LTEuMjM2SDUuMzY1Yy4wNDItLjAyMy4wODgtLjAzNC4xMzUtLjAzNC4wNDcgMCAuMDkzLjAxMi4xMzUuMDM0bDIuMjM1IDEuMjM3QzcuOTUgMjMuNTg4IDggMjMuNjczIDggMjMuNzY1djQuMzkzYzAgLjE3Mi4wOTEuMzMxLjI0LjQxN2wyLjM5OCAxLjM5M2MuMDc1LjA0My4xNjcuMDQzLjI0Mi4wMDFDMTAuOTU0IDI5LjkyNSAxMSAyOS44NDUgMTEgMjkuNzU5di03LjQ2NEMxMSAyMi4wODUgMTAuODg2IDIxLjg5MiAxMC43MDMgMjEuNzkxeiI+PC9wYXRoPjwvc3ZnPg=="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                     Node JS
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $367
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img alt="svgImg" class="w-8 h-8 rounded-full" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZjYzgwIiBkPSJNMzUuNTQ3IDQyLjQzMWwtMy4xODItMy4xODItMi4xMjEgMi4xMjEgMy4xODIgMy4xODJjLjU4Ni41ODYgMS41MzYuNTg2IDIuMTIxIDBTMzYuMTMzIDQzLjAxNyAzNS41NDcgNDIuNDMxek0zOC41NDcgMjQuNDMxbC0zLjE4Mi0zLjE4Mi0yLjEyMSAyLjEyMSAzLjE4MiAzLjE4MmMuNTg2LjU4NiAxLjUzNi41ODYgMi4xMjEgMFMzOS4xMzMgMjUuMDE3IDM4LjU0NyAyNC40MzF6TTEyLjY4MyA0Mi40MzFsMy4xODItMy4xODIgMi4xMjEgMi4xMjEtMy4xODIgMy4xODJjLS41ODYuNTg2LTEuNTM2LjU4Ni0yLjEyMSAwUzEyLjA5NyA0My4wMTcgMTIuNjgzIDQyLjQzMXpNOS40MzMgMjQuNDMxbDMuMTgyLTMuMTgyIDIuMTIxIDIuMTIxLTMuMTgyIDMuMTgyYy0uNTg2LjU4Ni0xLjUzNi41ODYtMi4xMjEgMFM4Ljg0NyAyNS4wMTcgOS40MzMgMjQuNDMxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZGQwZTEiIGQ9Ik0zOCA4YzAtMS45MzMtMS4xNDktMy0zLjIzMS0zUzMxIDcuNTY3IDMxIDkuNWMwIDEgMS45MjMgMS41IDMgMS41QzM2LjA4MiAxMSAzOCA5LjkzMyAzOCA4ek0xMCA4YzAtMS45MzMgMS4xNDktMyAzLjIzMS0zUzE3IDcuNTY3IDE3IDkuNWMwIDEtMS45MjMgMS41LTMgMS41QzExLjkxOCAxMSAxMCA5LjkzMyAxMCA4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0MjQyNDIiIGQ9Ik0zNSA3QTEgMSAwIDEgMCAzNSA5IDEgMSAwIDEgMCAzNSA3ek0xMyA3QTEgMSAwIDEgMCAxMyA5IDEgMSAwIDEgMCAxMyA3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZGQwZTEiIGQ9Ik0zNywzNGMwLDQuNzc0LTMuMjE5LDEwLTEzLjMxLDEwQzE1LjU2OCw0NCwxMSwzOC43NzQsMTEsMzRjMC01LDEtNS44MDYsMS0xMGMwLTQuNjg4LDAtNywwLTEwIGMwLTQuNzc0LDMuMDc2LTExLDExLjY5LTExUzM2LDYuOTkxLDM2LDEzYzAsMy0wLjIzNyw1LjQ1MywwLDEwQzM2LjE4NiwyNi41NjIsMzcsMzEsMzcsMzR6Ij48L3BhdGg+PGc+PHBhdGggZmlsbD0iI2Y1ZjVmNSIgZD0iTTI5IDZBNCA0IDAgMSAwIDI5IDE0IDQgNCAwIDEgMCAyOSA2ek0xOSA2QTQgNCAwIDEgMCAxOSAxNCA0IDQgMCAxIDAgMTkgNnoiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iI2VlZSIgZD0iTTI0IDIwYzAgLjU1Mi40NDggMSAxIDFzMS0uNDQ4IDEtMXYtM2gtMlYyMHpNMjIgMjBjMCAuNTUyLjQ0OCAxIDEgMXMxLS40NDggMS0xdi0zaC0yVjIweiI+PC9wYXRoPjwvZz48cGF0aCBmaWxsPSIjZmZjYzgwIiBkPSJNMjYuNSwxOGMtMC40MTIsMC0wLjY1My0wLjA4NS0xLjAxMS0wLjIwNWMtMC45NzUtMC4zMjgtMi4wMjEtMC4zMjYtMi45OTYsMC4wMDIgQzIyLjEzOCwxNy45MTYsMjEuOTEsMTgsMjEuNSwxOGMtMS4zMzQsMC0xLjUtMS0xLjUtMS41YzAtMS41LDEuNS0yLjUsMy0yLjVjMC44MzUsMCwxLjE2NSwwLDIsMGMxLjUsMCwzLDEsMywyLjUgQzI4LDE3LDI3LjgzNCwxOCwyNi41LDE4eiI+PC9wYXRoPjxnPjxwYXRoIGZpbGw9IiM0MjQyNDIiIGQ9Ik0yNyA5QTEgMSAwIDEgMCAyNyAxMSAxIDEgMCAxIDAgMjcgOXpNMTcgOUExIDEgMCAxIDAgMTcgMTEgMSAxIDAgMSAwIDE3IDl6TTI0IDEzQTIgMSAwIDEgMCAyNCAxNSAyIDEgMCAxIDAgMjQgMTN6Ij48L3BhdGg+PC9nPjwvc3ZnPg=="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      GoLang
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $2367
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>



        <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-100 dark:border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h5 class="text-l font-bold leading-none text-gray-900 dark:text-black">
              Front End Developmenet
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
          <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCA0MCA0MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjOThjY2ZkIiBkPSJNMjMuNSwyMGMwLDEuOTM1LTEuNTY1LDMuNS0zLjUsMy41cy0zLjUtMS41NjUtMy41LTMuNXMxLjU2NS0zLjUsMy41LTMuNVMyMy41LDE4LjA2NSwyMy41LDIweiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Nzg4YzciIGQ9Ik0yMCwyNGMtMi4yMDYsMC00LTEuNzk0LTQtNHMxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFMyMi4yMDYsMjQsMjAsMjR6IE0yMCwxN2MtMS42NTQsMC0zLDEuMzQ2LTMsMyBzMS4zNDYsMywzLDNzMy0xLjM0NiwzLTNTMjEuNjU0LDE3LDIwLDE3eiI+PC9wYXRoPjxnPjxwYXRoIGZpbGw9IiM5OGNjZmQiIGQ9Ik0zOS41LDIwYzAtMi43OTYtMi45MTItNS4yMzItNy40OTItNi43ODdjMC41NzYtMi42NzEsMC42NTUtNS4wNTUsMC4xNjYtNi44ODEgYy0wLjQwOC0xLjUyMi0xLjE4MS0yLjYxNy0yLjI5Ni0zLjI1M2MtMC42NzEtMC4zODItMS40MzgtMC41NzctMi4yNzktMC41NzdjLTIuMjA3LDAtNC44OTMsMS40MDEtNy41OTcsMy43OTEgQzE3LjI5NiwzLjkwMiwxNC42MDksMi41LDEyLjQsMi41Yy0wLjg0MiwwLTEuNjA4LDAuMTk0LTIuMjc5LDAuNTc3QzkuMDA2LDMuNzE0LDguMjMyLDQuODEsNy44MjUsNi4zMzMgYy0wLjQ4OSwxLjgyNi0wLjQxLDQuMjEsMC4xNjUsNi44OEMzLjQxMiwxNC43NjgsMC41LDE3LjIwNSwwLjUsMjBzMi45MTIsNS4yMzIsNy40OTEsNi43ODZjLTAuNTc2LDIuNjctMC42NTUsNS4wNTQtMC4xNjUsNi44OCBjMC40MDcsMS41MjQsMS4xODEsMi42MTksMi4yOTcsMy4yNTdjMC42NzEsMC4zODIsMS40MzgsMC41NzcsMi4yNzksMC41NzdjMC4wMDEsMCwwLDAsMC4wMDEsMGMyLjIwOCwwLDQuODk0LTEuNDAxLDcuNTk4LTMuNzkzIGMyLjcwNCwyLjM4OSw1LjM5LDMuNzg5LDcuNTk3LDMuNzljMC4wMDEsMCwwLjAwMSwwLDAuMDAxLDBjMC44NDIsMCwxLjYwOC0wLjE5NCwyLjI4LTAuNTc3YzEuMTE0LTAuNjM2LDEuODg3LTEuNzMxLDIuMjk0LTMuMjUzIGMwLjQ4OS0xLjgyNiwwLjQxLTQuMjEtMC4xNjUtNi44OEMzNi41ODcsMjUuMjMzLDM5LjUsMjIuNzk2LDM5LjUsMjB6IE0yOC44ODgsNC44MTdjMC42MzQsMC4zNjIsMS4wOSwxLjA0NiwxLjM1NCwyLjAzMyBjMC40MDEsMS40OTYsMC4zMjIsMy41MDktMC4xNTgsNS43OWMtMS41OTYtMC40MTctMy4zNDMtMC43MzQtNS4yMDgtMC45MzhjLTEuMTEtMS41MDItMi4yNjktMi44NTUtMy40NC00LjA0MSBjMi4zOTctMi4wODcsNC41OTgtMy4xNTgsNi4xNjMtMy4xNThDMjguMDg5LDQuNTAzLDI4LjUyMiw0LjYwOSwyOC44ODgsNC44MTd6IE0yNS43ODQsMjMuMjg3IGMtMC42NTMsMS4xMTctMS4zMjQsMi4xNTItMi4wMDMsMy4xMTljLTEuMjA1LDAuMTA1LTIuNDY3LDAuMTYyLTMuNzgyLDAuMTYyYy0xLjMxNiwwLTIuNTc4LTAuMDU4LTMuNzg0LTAuMTYyIGMtMC42NzktMC45NjctMS4zNS0yLjAwMi0yLjAwMy0zLjExOUMxMy41NzYsMjIuMTk3LDEzLDIxLjA5NiwxMi40ODEsMjBjMC41MTktMS4wOTUsMS4wOTUtMi4xOTcsMS43MzItMy4yODcgYzAuNjUzLTEuMTE3LDEuMzI1LTIuMTUyLDIuMDA0LTMuMTJjMS4yMDUtMC4xMDUsMi40NjgtMC4xNjIsMy43ODMtMC4xNjJjMS4zMTUsMCwyLjU3NywwLjA1NywzLjc4MSwwLjE2MiBjMC42NzksMC45NjgsMS4zNSwyLjAwMiwyLjAwMywzLjExOWMwLjYzNywxLjA5LDEuMjE0LDIuMTkyLDEuNzMzLDMuMjg3QzI2Ljk5OCwyMS4wOTYsMjYuNDIxLDIyLjE5NywyNS43ODQsMjMuMjg3eiBNMjguNTU4LDIyLjM5MmMwLjQxLDEuMDM2LDAuNzU2LDIuMDUyLDEuMDQxLDMuMDM1Yy0wLjk5LDAuMjU4LTIuMDU3LDAuNDc4LTMuMTk0LDAuNjU1YzAuMzc3LTAuNTgyLDAuNzQ4LTEuMTc0LDEuMTA2LTEuNzg3IEMyNy44ODEsMjMuNjYzLDI4LjIyNiwyMy4wMjgsMjguNTU4LDIyLjM5MnogTTIwLDMwLjk4M2MtMC43MjktMC43MzgtMS40NjctMS41NTYtMi4yMDUtMi40N2MwLjcyNCwwLjAzNCwxLjQ1NywwLjA1NSwyLjIwNSwwLjA1NSBjMC43NDcsMCwxLjQ4LTAuMDIxLDIuMjAzLTAuMDU1QzIxLjQ2NiwyOS40MjcsMjAuNzI5LDMwLjI0NiwyMCwzMC45ODN6IE0xMy41OTMsMjYuMDgyYy0xLjEzNi0wLjE3Ny0yLjIwMy0wLjM5Ny0zLjE5My0wLjY1NSBjMC4yODUtMC45ODMsMC42My0xLjk5OCwxLjA0LTMuMDM0YzAuMzMyLDAuNjM1LDAuNjc3LDEuMjcxLDEuMDQ2LDEuOTAzQzEyLjg0NCwyNC45MDgsMTMuMjE2LDI1LjUsMTMuNTkzLDI2LjA4MnogTTExLjQ0LDE3LjYwNyBjLTAuNDEtMS4wMzYtMC43NTUtMi4wNTEtMS4wNC0zLjAzNGMwLjk5LTAuMjU4LDIuMDU3LTAuNDc4LDMuMTk0LTAuNjU1Yy0wLjM3NywwLjU4Mi0wLjc0OSwxLjE3NC0xLjEwNywxLjc4NiBDMTIuMTE3LDE2LjMzNywxMS43NzIsMTYuOTcyLDExLjQ0LDE3LjYwN3ogTTIwLjAwMSw5LjAxOGMwLjcyOSwwLjczNywxLjQ2NiwxLjU1NSwyLjIwMiwyLjQ2OSBjLTAuNzIzLTAuMDM0LTEuNDU2LTAuMDU1LTIuMjAzLTAuMDU1cy0xLjQ4LDAuMDIxLTIuMjAzLDAuMDU1QzE4LjUzNCwxMC41NzMsMTkuMjcyLDkuNzU1LDIwLjAwMSw5LjAxOHogTTI3LjUxMSwxNS43MDQgYy0wLjM1OC0wLjYxMy0wLjcyOS0xLjIwNS0xLjEwNi0xLjc4N2MxLjEzNywwLjE3NywyLjIwNCwwLjM5NywzLjE5NCwwLjY1NWMtMC4yODUsMC45ODQtMC42MzEsMS45OTktMS4wNDEsMy4wMzYgQzI4LjIyNiwxNi45NzMsMjcuODgxLDE2LjMzNywyNy41MTEsMTUuNzA0eiBNOS43NTcsNi44NTFjMC4yNjUtMC45ODksMC43MjEtMS42NzQsMS4zNTUtMi4wMzdDMTEuNDc4LDQuNjA2LDExLjkxMSw0LjUsMTIuNCw0LjUgYzEuNTY3LDAsMy43NjgsMS4wNzIsNi4xNjYsMy4xNjFjLTEuMTcyLDEuMTg3LTIuMzMyLDIuNTM5LTMuNDQzLDQuMDQyYy0xLjg2NSwwLjIwNC0zLjYxMiwwLjUyMi01LjIwOCwwLjkzOSBDOS40MzUsMTAuMzU5LDkuMzU2LDguMzQ2LDkuNzU3LDYuODUxeiBNMi41LDIwYzAtMS43MjksMi4yMzEtMy41NjYsNS45ODMtNC44NTdDOC45MzUsMTYuNzA4LDkuNTM4LDE4LjM0MiwxMC4yOCwyMCBjLTAuNzQyLDEuNjU4LTEuMzQ1LDMuMjkyLTEuNzk3LDQuODU3QzQuNzMxLDIzLjU2NiwyLjUsMjEuNzI5LDIuNSwyMHogTTEyLjQwMSwzNS41Yy0wLjQ5LDAtMC45MjQtMC4xMDYtMS4yODgtMC4zMTMgYy0wLjYzNi0wLjM2My0xLjA5Mi0xLjA0OC0xLjM1Ni0yLjAzN2MtMC40MDEtMS40OTYtMC4zMjItMy41MDksMC4xNTgtNS43OWMxLjU5NiwwLjQxNywzLjM0MiwwLjczNCw1LjIwNywwLjkzOCBjMS4xMTEsMS41MDMsMi4yNzEsMi44NTYsMy40NDQsNC4wNDNDMTYuMTY4LDM0LjQyOSwxMy45NjcsMzUuNSwxMi40MDEsMzUuNXogTTMwLjI0MSwzMy4xNWMtMC4yNjUsMC45ODctMC43MiwxLjY3MS0xLjM1NCwyLjAzMyBjLTAuMzY1LDAuMjA4LTAuNzk5LDAuMzE0LTEuMjg5LDAuMzE0Yy0xLjU2NiwwLTMuNzY3LTEuMDcxLTYuMTY0LTMuMTU3YzEuMTcyLTEuMTg3LDIuMzMxLTIuNTQsMy40NDEtNC4wNDIgYzEuODY1LTAuMjA0LDMuNjExLTAuNTIyLDUuMjA3LTAuOTM4QzMwLjU2MywyOS42NDEsMzAuNjQyLDMxLjY1NCwzMC4yNDEsMzMuMTV6IE0zMS41MTUsMjQuODU4IGMtMC40NTItMS41NjUtMS4wNTUtMy4xOTktMS43OTctNC44NThjMC43NDItMS42NTksMS4zNDUtMy4yOTMsMS43OTctNC44NThDMzUuMjY4LDE2LjQzMywzNy41LDE4LjI3MSwzNy41LDIwIEMzNy41LDIxLjcyOSwzNS4yNjgsMjMuNTY3LDMxLjUxNSwyNC44NTh6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzQ3ODhjNyIgZD0iTTEyLjQwMiwzOGMtMC45MywwLTEuNzgtMC4yMTYtMi41MjgtMC42NDJjLTEuMjM3LTAuNzA4LTIuMDg5LTEuOTA2LTIuNTMyLTMuNTYzIGMtMC40NzItMS43NjItMC40NDYtNC4wNjQsMC4wNy02LjY4MkMyLjY5NCwyNS40MiwwLDIyLjg0MiwwLDIwczIuNjk0LTUuNDIsNy40MTItNy4xMTRjLTAuNTE3LTIuNjE3LTAuNTQyLTQuOTItMC4wNy02LjY4MiBDNy43ODUsNC41NDgsOC42MzcsMy4zNSw5Ljg3MywyLjY0M2MyLjUyLTEuNDM4LDYuMTc4LTAuMzkzLDEwLjEyOCwyLjk4OGMzLjk0OS0zLjM3OCw3LjYwNC00LjQyMiwxMC4xMjUtMi45ODYgYzEuMjM1LDAuNzA1LDIuMDg3LDEuOTAyLDIuNTMxLDMuNTU4YzAuNDcyLDEuNzYzLDAuNDQ2LDQuMDY2LTAuMDcxLDYuNjgzQzM3LjMwNSwxNC41NzksNDAsMTcuMTU4LDQwLDIwIGMwLDIuODQyLTIuNjk1LDUuNDIxLTcuNDE0LDcuMTE1YzAuNTE4LDIuNjE3LDAuNTQyLDQuOTE5LDAuMDcsNi42ODJjLTAuNDQzLDEuNjU2LTEuMjk0LDIuODUzLTIuNTI5LDMuNTU4IEMyNy42MDQsMzguNzkzLDIzLjk0NiwzNy43NDYsMjAsMzQuMzdDMTcuMjI0LDM2Ljc0NywxNC42MDQsMzgsMTIuNDAyLDM4eiBNMTIuNCwzYy0wLjc1MywwLTEuNDM3LDAuMTcyLTIuMDMxLDAuNTExIEM5LjM3Myw0LjA4MSw4LjY4LDUuMDc0LDguMzA5LDYuNDYyYy0wLjQ1OCwxLjcwNy0wLjM5OCw0LjAwNSwwLjE3MSw2LjY0NmwwLjA5NCwwLjQzNmwtMC40MjIsMC4xNDRDMy42MDYsMTUuMjMsMSwxNy41MzEsMSwyMCBzMi42MDYsNC43Nyw3LjE1MSw2LjMxM2wwLjQyMiwwLjE0NGwtMC4wOTQsMC40MzZjLTAuNTY5LDIuNjQxLTAuNjI5LDQuOTM5LTAuMTcxLDYuNjQ2YzAuMzcxLDEuMzg5LDEuMDY0LDIuMzgyLDIuMDYyLDIuOTUyIEMxMC45NjUsMzYuODI4LDExLjY0OCwzNywxMi40MDEsMzdoMC4wMDFjMi4wMTIsMCw0LjU5Mi0xLjMwMiw3LjI2Ny0zLjY2N0wyMCwzMy4wNGwwLjMzMSwwLjI5MyBjMi42NzQsMi4zNjIsNS4yNTUsMy42NjQsNy4yNjcsMy42NjRjMC43NTQsMCwxLjQzOC0wLjE3MiwyLjAzNC0wLjUxMWMwLjk5NC0wLjU2OCwxLjY4Ny0xLjU2LDIuMDU4LTIuOTQ4IGMwLjQ1OC0xLjcwNywwLjM5OC00LjAwNC0wLjE3MS02LjY0NWwtMC4wOTQtMC40MzZsMC40MjItMC4xNDRDMzYuMzkzLDI0Ljc3MSwzOSwyMi40NjksMzksMjBjMC0yLjQ3LTIuNjA3LTQuNzcxLTcuMTUzLTYuMzEzIGwtMC40MjItMC4xNDRsMC4wOTUtMC40MzZjMC41NjktMi42NDEsMC42MjktNC45MzksMC4xNzEtNi42NDZjLTAuMzcyLTEuMzg5LTEuMDY1LTIuMzgtMi4wNjEtMi45NDggYy0wLjU5NS0wLjMzOS0xLjI3OC0wLjUxMS0yLjAzMS0wLjUxMWMtMi4wMTEsMC00LjU5MSwxLjMwMi03LjI2NywzLjY2NmwtMC4zMzEsMC4yOTNMMTkuNjcsNi42NjhDMTYuOTk0LDQuMzAzLDE0LjQxMywzLDEyLjQsM3ogTTEyLjQwMSwzNmMtMC41NzcsMC0xLjA5NC0wLjEyNy0xLjUzNS0wLjM3OWMtMC43NTYtMC40MzItMS4yOTItMS4yMi0xLjU5My0yLjM0MmMtMC40MDgtMS41MjctMC4zNTUtMy42MSwwLjE1Mi02LjAyMiBsMC4xMDgtMC41MTNsMC41MDcsMC4xMzJjMS41OTEsMC40MTUsMy4zMTcsMC43MjcsNS4xMzUsMC45MjVsMC4yMTcsMC4wMjRMMTUuNTIzLDI4YzEuMDczLDEuNDUxLDIuMjE3LDIuNzkzLDMuMzk3LDMuOTg5IGwwLjM3NCwwLjM3OWwtMC40MDEsMC4zNUMxNi40NjQsMzQuODM0LDE0LjE1OCwzNiwxMi40MDEsMzZ6IE0xMC4zMDMsMjcuOTczYy0wLjQ2OCwyLjA0LTAuNDgyLDMuNzc3LTAuMDYzLDUuMDQ3IGMwLjI3OCwwLjg0MSwwLjYwNSwxLjQzOCwxLjEyMSwxLjczMmMxLjI5NCwwLjczOSwzLjgxMy0wLjIzNyw2LjQ3My0yLjQ0NmMtMS4wMzMtMS4wOC0yLjAzNS0yLjI2Ny0yLjk4NC0zLjUzNiBDMTMuMjU3LDI4LjU4OCwxMS43MywyOC4zMiwxMC4zMDMsMjcuOTczeiBNMjcuNTk5LDM1Ljk5N2MtMS43NTcsMC00LjA2My0xLjE2NS02LjQ5MS0zLjI4bC0wLjQwMS0wLjM0OWwwLjM3NC0wLjM3OSBjMS4xODUtMS4yMDIsMi4zMjctMi41NDMsMy4zOTQtMy45ODhsMC4xMy0wLjE3NmwwLjIxOC0wLjAyNGMxLjgxOS0wLjE5OSwzLjU0OC0wLjUxLDUuMTM3LTAuOTI1bDAuNTA4LTAuMTMybDAuMTA3LDAuNTEzIGMwLjUwNywyLjQxNCwwLjU2LDQuNDk2LDAuMTUxLDYuMDIyYy0wLjMwMSwxLjEyMS0wLjgzNiwxLjkwOC0xLjU4OSwyLjMzOEMyOC42OTMsMzUuODcsMjguMTc2LDM1Ljk5NywyNy41OTksMzUuOTk3eiBNMjIuMTY2LDMyLjMwNmMyLjY2LDIuMjA3LDUuMTcxLDMuMTg0LDYuNDc1LDIuNDQzYzAuNTEzLTAuMjkyLDAuODM5LTAuODg5LDEuMTE3LTEuNzI4YzAuNDIyLTEuMjcxLDAuNDA1LTMuMDA4LTAuMDYyLTUuMDQ3IGMtMS40MjcsMC4zNDctMi45NTQsMC42MTQtNC41NDksMC43OTdDMjQuMjA0LDMwLjAzNSwyMy4yMDMsMzEuMjIxLDIyLjE2NiwzMi4zMDZ6IE0yMCwzMS42OTVsLTAuMzU1LTAuMzYgYy0wLjc3My0wLjc4Mi0xLjUyNi0xLjYyNS0yLjIzOC0yLjUwOGwtMC43LTAuODY3bDEuMTEyLDAuMDUzYzEuNDMxLDAuMDY4LDIuOTMxLDAuMDY4LDQuMzYxLDBsMS4xMTEtMC4wNTNsLTAuNjk4LDAuODY2IGMtMC43MSwwLjg3OS0xLjQ2MiwxLjcyMy0yLjIzNywyLjUwN0wyMCwzMS42OTV6IE0xOC44OTgsMjkuMDU0YzAuMzU5LDAuNDE3LDAuNzI4LDAuODIyLDEuMTAyLDEuMjEyIGMwLjM3NC0wLjM5MiwwLjc0MS0wLjc5NiwxLjEwMS0xLjIxMkMyMC4zNzIsMjkuMDczLDE5LjYyNywyOS4wNzMsMTguODk4LDI5LjA1NHogTTIwLDI3LjA2OGMtMS4yODQsMC0yLjU3MS0wLjA1NS0zLjgyNy0wLjE2NCBsLTAuMjMyLTAuMDJsLTAuMTM0LTAuMTkxYy0wLjcyMS0xLjAyNy0xLjQwMi0yLjA4OS0yLjAyNS0zLjE1NGMtMC42MTktMS4wNjEtMS4yMDktMi4xNzktMS43NTMtMy4zMjVMMTEuOTI3LDIwbDAuMTAyLTAuMjE0IGMwLjU0NC0xLjE0NiwxLjEzNC0yLjI2NSwxLjc1My0zLjMyNWMwLjYzLTEuMDc4LDEuMjkzLTIuMTA5LDIuMDI3LTMuMTU1bDAuMTM0LTAuMTlsMC4yMzItMC4wMmMyLjUwOC0wLjIxOCw1LjE0Mi0wLjIxOCw3LjY0OSwwIGwwLjIzMiwwLjAybDAuMTM0LDAuMTkxYzAuNzM2LDEuMDUsMS4zOTksMi4wODIsMi4wMjUsMy4xNTRjMC42MjUsMS4wNywxLjIxNSwyLjE4OCwxLjc1MywzLjMyNkwyOC4wNjksMjBsLTAuMTAxLDAuMjE0IGMtMC41MzgsMS4xMzctMS4xMjgsMi4yNTYtMS43NTMsMy4zMjZjLTAuNjI2LDEuMDcyLTEuMjg5LDIuMTA0LTIuMDI1LDMuMTU0bC0wLjEzNCwwLjE5MWwtMC4yMzIsMC4wMiBDMjIuNTcsMjcuMDEzLDIxLjI4NCwyNy4wNjgsMjAsMjcuMDY4eiBNMTYuNDkxLDI1LjkyOGMyLjMwOSwwLjE4Nyw0LjcxLDAuMTg3LDcuMDE1LDBjMC42NjctMC45NjEsMS4yNzItMS45MSwxLjg0Ny0yLjg5MyBjMC41NzEtMC45NzcsMS4xMTItMS45OTcsMS42MS0zLjAzNWMtMC40OTgtMS4wMzgtMS4wMzktMi4wNTgtMS42MS0zLjAzNWMtMC41NzQtMC45ODMtMS4xOC0xLjkzMi0xLjg0Ny0yLjg5MyBjLTIuMzA2LTAuMTg3LTQuNzExLTAuMTg3LTcuMDEzLDBjLTAuNjY1LDAuOTU4LTEuMjcxLDEuOTA2LTEuODQ5LDIuODk0Yy0wLjU2NSwwLjk2OC0xLjEwNywxLjk4OC0xLjYxLDMuMDM0IGMwLjUwMywxLjA0NSwxLjA0NCwyLjA2NSwxLjYxLDMuMDM1QzE1LjIxNSwyNC4wMSwxNS44MzYsMjQuOTgyLDE2LjQ5MSwyNS45Mjh6IE0yNS4zNzcsMjYuNzQ5bDAuNjA3LTAuOTM4IGMwLjM3My0wLjU3NiwwLjc0LTEuMTYyLDEuMDk1LTEuNzY3YzAuMzY2LTAuNjI2LDAuNzA3LTEuMjU1LDEuMDM1LTEuODgzbDAuNTA2LTAuOTY4bDAuNDAyLDEuMDE2IGMwLjQwNSwxLjAyMywwLjc2MSwyLjA2LDEuMDU3LDMuMDgxbDAuMTQzLDAuNDk0bC0wLjQ5NywwLjEyOWMtMS4wMTcsMC4yNjQtMi4xMDcsMC40ODgtMy4yNDMsMC42NjVMMjUuMzc3LDI2Ljc0OXogTTI4LjQ3OSwyMy42IGMtMC4xNzQsMC4zMTYtMC4zNTMsMC42MzMtMC41MzcsMC45NDljLTAuMTY4LDAuMjg4LTAuMzQsMC41NzEtMC41MTMsMC44NTFjMC41MjgtMC4xLDEuMDQyLTAuMjA5LDEuNTQtMC4zMjkgQzI4LjgxOSwyNC41ODEsMjguNjU1LDI0LjA5LDI4LjQ3OSwyMy42eiBNMTQuNjIxLDI2Ljc0OWwtMS4xMDUtMC4xNzJjLTEuMTM2LTAuMTc3LTIuMjI3LTAuNDAxLTMuMjQxLTAuNjY1bC0wLjQ5Ny0wLjEyOSBsMC4xNDMtMC40OTNjMC4yOTQtMS4wMTcsMC42NDktMi4wNTMsMS4wNTYtMy4wOGwwLjQwMi0xLjAxN2wwLjUwNiwwLjk3YzAuMzI3LDAuNjI4LDAuNjY4LDEuMjU2LDEuMDM0LDEuODgyIGMwLjM1NCwwLjYwNSwwLjcyMiwxLjE5MSwxLjA5NSwxLjc2N0wxNC42MjEsMjYuNzQ5eiBNMTEuMDI5LDI1LjA2OWMwLjQ5NiwwLjExOSwxLjAxLDAuMjI5LDEuNTM3LDAuMzI5IGMtMC4xNzMtMC4yNzktMC4zNDQtMC41NjItMC41MTItMC44NWMtMC4xODUtMC4zMTUtMC4zNjItMC42MzEtMC41MzYtMC45NDhDMTEuMzQyLDI0LjA5MiwxMS4xNzksMjQuNTgyLDExLjAyOSwyNS4wNjl6IE0zMS4xOCwyNS41MDJsLTAuMTQ2LTAuNTA1Yy0wLjQ0Ni0xLjU0OC0xLjA0My0zLjE2LTEuNzcyLTQuNzkyTDI5LjE3LDIwbDAuMDkyLTAuMjA0YzAuNzI5LTEuNjMsMS4zMjYtMy4yNDMsMS43NzMtNC43OTIgbDAuMTQ2LTAuNTA1bDAuNDk4LDAuMTcxQzM1LjYzNywxNi4wMzEsMzgsMTguMDI0LDM4LDIwYzAsMS45NzctMi4zNjMsMy45NjktNi4zMjIsNS4zMzFMMzEuMTgsMjUuNTAyeiBNMzAuMjY1LDIwIGMwLjYzLDEuNDI3LDEuMTU5LDIuODQsMS41NzksNC4yMDlDMzQuOTkzLDIzLjAzOSwzNywyMS40MTIsMzcsMjBzLTIuMDA3LTMuMDM5LTUuMTU2LTQuMjA5IEMzMS40MjQsMTcuMTYyLDMwLjg5NCwxOC41NzQsMzAuMjY1LDIweiBNOC44MTcsMjUuNTAxTDguMzIsMjUuMzNDNC4zNjMsMjMuOTY4LDIsMjEuOTc2LDIsMjBzMi4zNjMtMy45NjgsNi4zMi01LjMzbDAuNDk3LTAuMTcxIGwwLjE0NiwwLjUwNWMwLjQ0OSwxLjU1NCwxLjA0NSwzLjE2NywxLjc3Miw0Ljc5MkwxMC44MjgsMjBsLTAuMDkyLDAuMjA0Yy0wLjcyOCwxLjYyNS0xLjMyMywzLjIzOC0xLjc3Miw0Ljc5Mkw4LjgxNywyNS41MDF6IE04LjE1NSwxNS43OTFDNS4wMDYsMTYuOTYyLDMsMTguNTg5LDMsMjBzMi4wMDYsMy4wMzgsNS4xNTUsNC4yMDljMC40MjEtMS4zNzUsMC45NS0yLjc4NywxLjU3OC00LjIwOSBDOS4xMDUsMTguNTc4LDguNTc2LDE3LjE2Niw4LjE1NSwxNS43OTF6IE0xMS4zNzgsMTguODA5bC0wLjQwMi0xLjAxN2MtMC40MDYtMS4wMjctMC43NjItMi4wNjMtMS4wNTYtMy4wOGwtMC4xNDMtMC40OTMgbDAuNDk3LTAuMTI5YzEuMDE2LTAuMjY0LDIuMTA2LTAuNDg4LDMuMjQyLTAuNjY1bDEuMTA2LTAuMTcybC0wLjYxLDAuOTM5Yy0wLjM3MywwLjU3NS0wLjc0LDEuMTYxLTEuMDk1LDEuNzY2IGMtMC4zNjYsMC42MjUtMC43MDcsMS4yNTQtMS4wMzQsMS44ODJMMTEuMzc4LDE4LjgwOXogTTExLjAyOSwxNC45MzFjMC4xNDksMC40ODcsMC4zMTMsMC45NzgsMC40ODksMS40NjkgYzAuMTc0LTAuMzE2LDAuMzUyLTAuNjMyLDAuNTM2LTAuOTQ4YzAuMTY4LTAuMjg3LDAuMzM5LTAuNTcsMC41MTItMC44NUMxMi4wMzksMTQuNzAxLDExLjUyNSwxNC44MTIsMTEuMDI5LDE0LjkzMXogTTI4LjYyLDE4LjgwOWwtMC41MDYtMC45NjljLTAuMzI4LTAuNjI5LTAuNjY5LTEuMjU3LTEuMDM1LTEuODgzYy0wLjM1NC0wLjYwNS0wLjcyMi0xLjE5MS0xLjA5NS0xLjc2N2wtMC42MDctMC45MzhsMS4xMDQsMC4xNzIgYzEuMTM3LDAuMTc3LDIuMjI5LDAuNDAxLDMuMjQzLDAuNjY2bDAuNDk3LDAuMTI5bC0wLjE0MywwLjQ5NGMtMC4yOTYsMS4wMi0wLjY1MSwyLjA1Ny0xLjA1NywzLjA4MUwyOC42MiwxOC44MDl6IE0yNy40MywxNC42MDEgYzAuMTczLDAuMjgsMC4zNDUsMC41NjMsMC41MTMsMC44NTFjMC4xODUsMC4zMTYsMC4zNjMsMC42MzIsMC41MzcsMC45NDljMC4xNzYtMC40OTEsMC4zNC0wLjk4MiwwLjQ5LTEuNDcgQzI4LjQ3MywxNC44MTEsMjcuOTU4LDE0LjcwMSwyNy40MywxNC42MDF6IE0zMC40NjUsMTMuMjU3bC0wLjUwNy0wLjEzMmMtMS41ODctMC40MTUtMy4zMTUtMC43MjYtNS4xMzctMC45MjVsLTAuMjE4LTAuMDI0IGwtMC4xMy0wLjE3NmMtMS4wNy0xLjQ0OS0yLjIxMi0yLjc5MS0zLjM5NC0zLjk4N2wtMC4zNzQtMC4zNzlsMC40MDEtMC4zNWMzLjIyOS0yLjgxMSw2LjI0My0zLjkxOSw4LjAyNy0yLjkwMSBjMC43NTUsMC40MzEsMS4yOSwxLjIxOCwxLjU5MSwyLjMzOGMwLjQwOCwxLjUyNywwLjM1NSwzLjYxLTAuMTUyLDYuMDIzTDMwLjQ2NSwxMy4yNTd6IE0yNS4xNDcsMTEuMjI5IGMxLjU5NywwLjE4MywzLjEyMywwLjQ1MSw0LjU0OSwwLjc5OGMwLjUxNy0xLjkwNywwLjU5LTMuNTk1LDAuMDYzLTUuMDQ4Yy0wLjMwMi0wLjgzLTAuNjA0LTEuNDM1LTEuMTE5LTEuNzI5IGMtMS4yOTgtMC43NC0zLjgxMiwwLjIzNi02LjQ3MywyLjQ0NEMyMy4yLDguNzc1LDI0LjIwMSw5Ljk2MiwyNS4xNDcsMTEuMjI5eiBNOS41MzQsMTMuMjU3bC0wLjEwOC0wLjUxMyBjLTAuNTA4LTIuNDEzLTAuNTYxLTQuNDk1LTAuMTUyLTYuMDIyYzAuMzAxLTEuMTIzLDAuODM2LTEuOTExLDEuNTkxLTIuMzQxYzEuNzg5LTEuMDIsNC44MDEsMC4wOTEsOC4wMywyLjkwNGwwLjQwMiwwLjM1IGwtMC4zNzUsMC4zNzljLTEuMTg0LDEuMTk3LTIuMzI2LDIuNTM5LTMuMzk2LDMuOTg3bC0wLjEzLDAuMTc2bC0wLjIxOCwwLjAyNGMtMS44MTgsMC4xOTktMy41NDcsMC41MS01LjEzNywwLjkyNUw5LjUzNCwxMy4yNTd6IE0xMi40LDVjLTAuNDAxLDAtMC43NTEsMC4wODMtMS4wNDEsMC4yNDljLTAuNTE0LDAuMjkzLTAuNzc0LDAuOTE2LTEuMTE5LDEuNzMxYy0wLjU0LDEuMjc1LTAuNDQ5LDMuMDExLDAuMDYzLDUuMDQ3IGMxLjQyOC0wLjM0NywyLjk1NC0wLjYxNSw0LjU0OS0wLjc5OGMwLjk0Ni0xLjI2NywxLjk0OC0yLjQ1MywyLjk4My0zLjUzNEMxNS43NjYsNS45NzcsMTMuODAzLDUsMTIuNCw1eiBNMTYuNzA5LDEyLjAzOSBsMC42OTktMC44NjZjMC43MS0wLjg4LDEuNDYzLTEuNzIzLDIuMjM3LTIuNTA3bDAuMzU1LTAuMzZsMC4zNTUsMC4zNmMwLjc3NywwLjc4NywxLjUyOSwxLjYzLDIuMjM2LDIuNTA2bDAuNjk3LDAuODY2IGwtMS4xMS0wLjA1MmMtMS40My0wLjA2Ny0yLjkzLTAuMDY3LTQuMzU5LDBMMTYuNzA5LDEyLjAzOXogTTIwLDEwLjkzMmMwLjM3LDAsMC43MzcsMC4wMDUsMS4xMDEsMC4wMTQgYy0wLjM1Ny0wLjQxNS0wLjcyNi0wLjgxOS0xLjEtMS4yMTFjLTAuMzc0LDAuMzkxLTAuNzQyLDAuNzk1LTEuMTAxLDEuMjExQzE5LjI2NCwxMC45MzcsMTkuNjMsMTAuOTMyLDIwLDEwLjkzMnoiPjwvcGF0aD48L2c+PC9zdmc+"/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      ReactJS
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Django, Flask, Tensorflow
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                  <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjYmRiZGJkIiBkPSJNMjMuOTMzIDJMMyA5LjI4NSA2LjMwOCAzNi40MDggMjMuOTU1IDQ2IDQxLjY5MyAzNi4yNzggNDUgOS4xNTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2I3MWMxYyIgZD0iTTQyLjgxOCAxMC41MjdMMjQgNC4xMzUgMjQgNDMuNjk1IDM5LjgzMiAzNS4wMTd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2RkMmMwMCIgZD0iTTIzLjk0MSA0LjExNUw1LjE4MSAxMC42NDQgOC4xNjggMzUuMTQzIDIzLjk1MSA0My43MjEgMjQgNDMuNjk1IDI0IDQuMTM1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNiZGJkYmQiIGQ9Ik0yNCA1Ljk5NkwyNCAxNS41MDQgMzIuNTc4IDM0IDM2Ljk4NyAzNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZWVlIiBkPSJNMTEuMDEzIDM0TDE1LjQyMiAzNCAyNCAxNS41MDQgMjQgNS45OTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2JkYmRiZCIgZD0iTTI0IDI0SDMwVjI4SDI0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNlZWUiIGQ9Ik0xOCAyNEgyNFYyOEgxOHoiPjwvcGF0aD48L3N2Zz4="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      Angular JS
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Django, Flask
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRjQ0MzM2IiBkPSJNMjMuNjUsMjQuODk4Yy0wLjk5OC0xLjYwOS0xLjcyMi0yLjk0My0yLjcyNS01LjQ1NUMxOS4yMjksMTUuMiwzMS4yNCwxMS4zNjYsMjYuMzcsMy45OTljMi4xMTEsNS4wODktNy41NzcsOC4yMzUtOC40NzcsMTIuNDczQzE3LjA3LDIwLjM3LDIzLjY0NSwyNC44OTgsMjMuNjUsMjQuODk4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGNDQzMzYiIGQ9Ik0yMy44NzgsMTcuMjdjLTAuMTkyLDIuNTE2LDIuMjI5LDMuODU3LDIuMjk5LDUuNjk1YzAuMDU2LDEuNDk2LTEuNDQ3LDIuNzQzLTEuNDQ3LDIuNzQzczIuNzI4LTAuNTM2LDMuNTc5LTIuODE4YzAuOTQ1LTIuNTM0LTEuODM0LTQuMjY5LTEuNTQ4LTYuMjk4YzAuMjY3LTEuOTM4LDYuMDMxLTUuNTQzLDYuMDMxLTUuNTQzUzI0LjMxMSwxMS42MTEsMjMuODc4LDE3LjI3eiI+PC9wYXRoPjxnPjxwYXRoIGZpbGw9IiMxNTY1QzAiIGQ9Ik0zMi4wODQgMjUuMDU1YzEuNzU0LS4zOTQgMy4yMzMuNzIzIDMuMjMzIDIuMDEgMCAyLjkwMS00LjAyMSA1LjY0My00LjAyMSA1LjY0M3M2LjIyNS0uNzQyIDYuMjI1LTUuNTA1QzM3LjUyMSAyNC4wNTMgMzQuNDY0IDIzLjI2NiAzMi4wODQgMjUuMDU1ek0yOS4xMjkgMjcuMzk1YzAgMCAxLjk0MS0xLjM4MyAyLjQ1OC0xLjkwMi00Ljc2MyAxLjAxMS0xNS42MzggMS4xNDctMTUuNjM4LjI2OSAwLS44MDkgMy41MDctMS42MzggMy41MDctMS42MzhzLTcuNzczLS4xMTItNy43NzMgMi4xODFDMTEuNjgzIDI4LjY5NSAyMS44NTggMjguODY2IDI5LjEyOSAyNy4zOTV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTI3LjkzNSwyOS41NzFjLTQuNTA5LDEuNDk5LTEyLjgxNCwxLjAyLTEwLjM1NC0wLjk5M2MtMS4xOTgsMC0yLjk3NCwwLjk2My0yLjk3NCwxLjg4OWMwLDEuODU3LDguOTgyLDMuMjkxLDE1LjYzLDAuNTcyTDI3LjkzNSwyOS41NzF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTE4LjY4NiwzMi43MzljLTEuNjM2LDAtMi42OTUsMS4wNTQtMi42OTUsMS44MjJjMCwyLjM5MSw5Ljc2LDIuNjMyLDEzLjYyNywwLjIwNWwtMi40NTgtMS42MzJDMjQuMjcxLDM0LjQwNCwxNy4wMTQsMzQuNTc5LDE4LjY4NiwzMi43Mzl6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTM2LjI4MSwzNi42MzJjMC0wLjkzNi0xLjA1NS0xLjM3Ny0xLjQzMy0xLjU4OGMyLjIyOCw1LjM3My0yMi4zMTcsNC45NTYtMjIuMzE3LDEuNzg0YzAtMC43MjEsMS44MDctMS40MjcsMy40NzctMS4wOTNsLTEuNDItMC44MzlDMTEuMjYsMzQuMzc0LDksMzUuODM3LDksMzcuMDE3QzksNDIuNTIsMzYuMjgxLDQyLjI1NSwzNi4yODEsMzYuNjMyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxNTY1QzAiIGQ9Ik0zOSwzOC42MDRjLTQuMTQ2LDQuMDk1LTE0LjY1OSw1LjU4Ny0yNS4yMzEsMy4wNTdDMjQuMzQxLDQ2LjE2NCwzOC45NSw0My42MjgsMzksMzguNjA0eiI+PC9wYXRoPjwvZz48L3N2Zz4="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      Vue JS
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Spring
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img alt="svgImg" class="w-8 h-8 rounded-full" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMzg4ZTNjIiBkPSJNMTcuMjA0IDE5LjEyMmwtNC45MDcgMi43MTVDMTIuMTEzIDIxLjkzOCAxMiAyMi4xMjYgMTIgMjIuMzI5djUuNDMzYzAgLjIwMy4xMTMuMzkuMjk3LjQ5Mmw0LjkwOCAyLjcxN2MuMTgzLjEwMS40MS4xMDEuNTkzIDBsNC45MDctMi43MTdDMjIuODg3IDI4LjE1MiAyMyAyNy45NjUgMjMgMjcuNzYydi01LjQzM2MwLS4yMDMtLjExMy0uMzktLjI5Ny0uNDkybC00LjkwNi0yLjcxNWMtLjA5Mi0uMDUxLS4xOTUtLjA3Ni0uMjk3LS4wNzYtLjEwMyAwLS4yMDUuMDI1LS4yOTcuMDc2TTQyLjQ1MSAyNC4wMTNsLS44MTguNDUyYy0uMDMxLjAxNy0uMDQ5LjA0OC0uMDQ5LjA4MnYuOTA2YzAgLjAzNC4wMTkuMDY1LjA0OS4wODJsLjgxOC40NTNjLjAzMS4wMTcuMDY4LjAxNy4wOTkgMGwuODE4LS40NTNjLjAzLS4wMTcuMDQ5LS4wNDguMDQ5LS4wODJ2LS45MDZjMC0uMDM0LS4wMTktLjA2NS0uMDUtLjA4MmwtLjgxOC0uNDUyQzQyLjUzNCAyNC4wMDQgNDIuNTE3IDI0IDQyLjUgMjRTNDIuNDY2IDI0LjAwNCA0Mi40NTEgMjQuMDEzIj48L3BhdGg+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZD0iTTM1Ljc1MSwxMy4zNjRsLTIuMzg5LTEuMzMzYy0wLjA3NS0wLjA0Mi0wLjE2Ny0wLjA0MS0wLjI0MSwwLjAwMyBjLTAuMDc0LDAuMDQ0LTAuMTIsMC4xMjMtMC4xMiwwLjIwOUwzMywyMC4yOTVsLTIuMjAzLTEuMjE5QzMwLjcwNSwxOS4wMjUsMzAuNjAyLDE5LDMwLjUsMTljLTAuMTAyLDAtMC4yMDUsMC4wMjUtMC4yOTcsMC4wNzYgaDAuMDAxbC00LjkwNywyLjcxNUMyNS4xMTMsMjEuODkyLDI1LDIyLjA4LDI1LDIyLjI4MnY1LjQzM2MwLDAuMjAzLDAuMTEzLDAuMzksMC4yOTcsMC40OTJsNC45MDgsMi43MTcgYzAuMTgzLDAuMTAxLDAuNDEsMC4xMDEsMC41OTMsMGw0LjkwNy0yLjcxN0MzNS44ODcsMjguMTA2LDM2LDI3LjkxOCwzNiwyNy43MTVWMTMuNzg4QzM2LDEzLjYxMiwzNS45MDQsMTMuNDUsMzUuNzUxLDEzLjM2NHogTTMyLjg2NiwyNi40NThsLTIuMjMsMS4yMzVjLTAuMDgzLDAuMDQ2LTAuMTg2LDAuMDQ2LTAuMjY5LDBsLTIuMjMxLTEuMjM1QzI4LjA1MSwyNi40MTIsMjgsMjYuMzI2LDI4LDI2LjIzNHYtMi40NyBjMC0wLjA5MiwwLjA1MS0wLjE3NywwLjEzNS0wLjIyNGwyLjIzMS0xLjIzNGgtMC4wMDFjMC4wNDItMC4wMjMsMC4wODgtMC4wMzQsMC4xMzUtMC4wMzRjMC4wNDcsMCwwLjA5MywwLjAxMiwwLjEzNSwwLjAzNCBsMi4yMywxLjIzNEMzMi45NDksMjMuNTg3LDMzLDIzLjY3MywzMywyMy43NjV2Mi40N0MzMywyNi4zMjYsMzIuOTQ5LDI2LjQxMiwzMi44NjYsMjYuNDU4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0xNy4yMDQsMTkuMTIyTDEyLDI3Ljc2MmMwLDAuMjAzLDAuMTEzLDAuMzksMC4yOTcsMC40OTJsNC45MDgsMi43MTcgYzAuMTgzLDAuMTAxLDAuNDEsMC4xMDEsMC41OTMsMEwyMywyMi4zMjljMC0wLjIwMy0wLjExMy0wLjM5LTAuMjk3LTAuNDkybC00LjkwNi0yLjcxNWMtMC4wOTItMC4wNTEtMC4xOTUtMC4wNzYtMC4yOTctMC4wNzYgYy0wLjEwMywwLTAuMjA1LDAuMDI1LTAuMjk3LDAuMDc2Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTE3LjIwNCwxOS4xMjJsLTQuOTA3LDIuNzE1QzEyLjExMywyMS45MzgsMTIsMjIuMTI2LDEyLDIyLjMyOWw1LjIwNCw4LjY0MiBjMC4xODMsMC4xMDEsMC40MSwwLjEwMSwwLjU5MywwbDQuOTA3LTIuNzE3QzIyLjg4NywyOC4xNTIsMjMsMjcuOTY1LDIzLDI3Ljc2MmwtNS4yMDMtOC42NGMtMC4wOTItMC4wNTEtMC4xOTUtMC4wNzYtMC4yOTctMC4wNzYgYy0wLjEwMywwLTAuMjA1LDAuMDI1LTAuMjk3LDAuMDc2Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZD0iTTQ3LjcwMyAyMS43OTFsLTQuOTA2LTIuNzE1QzQyLjcwNSAxOS4wMjUgNDIuNjAyIDE5IDQyLjUgMTljLS4xMDIgMC0uMjA1LjAyNS0uMjk3LjA3NmguMDAxbC00LjkwNyAyLjcxNUMzNy4xMTQgMjEuODkyIDM3IDIyLjA4NCAzNyAyMi4yOTR2NS40MTFjMCAuMjA5LjExNC40MDIuMjk3LjUwM2w0LjkwOCAyLjcxN2MuMTg0LjEwMi40MDkuMTAyLjU5MyAwbDIuMjYzLTEuMjUzYy4yMDctLjExNS4yMDYtLjQxMi0uMDAyLS41MjZsLTQuOTI0LTIuNjg3QzQwLjA1MiAyNi40MTIgNDAgMjYuMzI1IDQwIDI2LjIzMXYtMi40NjZjMC0uMDkyLjA1LS4xNzcuMTMtLjIyMWwyLjIzNS0xLjIzNmgtLjAwMWMuMDQyLS4wMjMuMDg4LS4wMzQuMTM1LS4wMzQuMDQ3IDAgLjA5My4wMTIuMTM1LjAzNGwyLjIzNSAxLjIzN2MuMDguMDQ0LjEzLjEyOS4xMy4yMjF2Mi4wMTJjMCAuMDg2LjA0Ni4xNjYuMTIxLjIwOS4wNzUuMDQyLjE2Ny4wNDIuMjQyLS4wMDFsMi4zOTgtMS4zOTNjLjE0OC0uMDg2LjI0LS4yNDUuMjQtLjQxN3YtMS44OEM0OCAyMi4wODUgNDcuODg2IDIxLjg5MiA0Ny43MDMgMjEuNzkxek0xMC43MDMgMjEuNzkxbC00LjkwNi0yLjcxNUM1LjcwNSAxOS4wMjUgNS42MDIgMTkgNS41IDE5Yy0uMTAyIDAtLjIwNS4wMjUtLjI5Ny4wNzZoLjAwMWwtNC45MDcgMi43MTVDLjExNCAyMS44OTIgMCAyMi4wODQgMCAyMi4yOTR2Ny40NjVjMCAuMDg2LjA0Ni4xNjYuMTIxLjIwOS4wNzUuMDQyLjE2Ny4wNDIuMjQyLS4wMDFsMi4zOTgtMS4zOTNDMi45MDkgMjguNDg4IDMgMjguMzI5IDMgMjguMTU3di00LjM5M2MwLS4wOTIuMDUtLjE3Ny4xMy0uMjIxbDIuMjM1LTEuMjM2SDUuMzY1Yy4wNDItLjAyMy4wODgtLjAzNC4xMzUtLjAzNC4wNDcgMCAuMDkzLjAxMi4xMzUuMDM0bDIuMjM1IDEuMjM3QzcuOTUgMjMuNTg4IDggMjMuNjczIDggMjMuNzY1djQuMzkzYzAgLjE3Mi4wOTEuMzMxLjI0LjQxN2wyLjM5OCAxLjM5M2MuMDc1LjA0My4xNjcuMDQzLjI0Mi4wMDFDMTAuOTU0IDI5LjkyNSAxMSAyOS44NDUgMTEgMjkuNzU5di03LjQ2NEMxMSAyMi4wODUgMTAuODg2IDIxLjg5MiAxMC43MDMgMjEuNzkxeiI+PC9wYXRoPjwvc3ZnPg=="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                     Wordpress
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $367
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img alt="svgImg" class="w-8 h-8 rounded-full" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZjYzgwIiBkPSJNMzUuNTQ3IDQyLjQzMWwtMy4xODItMy4xODItMi4xMjEgMi4xMjEgMy4xODIgMy4xODJjLjU4Ni41ODYgMS41MzYuNTg2IDIuMTIxIDBTMzYuMTMzIDQzLjAxNyAzNS41NDcgNDIuNDMxek0zOC41NDcgMjQuNDMxbC0zLjE4Mi0zLjE4Mi0yLjEyMSAyLjEyMSAzLjE4MiAzLjE4MmMuNTg2LjU4NiAxLjUzNi41ODYgMi4xMjEgMFMzOS4xMzMgMjUuMDE3IDM4LjU0NyAyNC40MzF6TTEyLjY4MyA0Mi40MzFsMy4xODItMy4xODIgMi4xMjEgMi4xMjEtMy4xODIgMy4xODJjLS41ODYuNTg2LTEuNTM2LjU4Ni0yLjEyMSAwUzEyLjA5NyA0My4wMTcgMTIuNjgzIDQyLjQzMXpNOS40MzMgMjQuNDMxbDMuMTgyLTMuMTgyIDIuMTIxIDIuMTIxLTMuMTgyIDMuMTgyYy0uNTg2LjU4Ni0xLjUzNi41ODYtMi4xMjEgMFM4Ljg0NyAyNS4wMTcgOS40MzMgMjQuNDMxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZGQwZTEiIGQ9Ik0zOCA4YzAtMS45MzMtMS4xNDktMy0zLjIzMS0zUzMxIDcuNTY3IDMxIDkuNWMwIDEgMS45MjMgMS41IDMgMS41QzM2LjA4MiAxMSAzOCA5LjkzMyAzOCA4ek0xMCA4YzAtMS45MzMgMS4xNDktMyAzLjIzMS0zUzE3IDcuNTY3IDE3IDkuNWMwIDEtMS45MjMgMS41LTMgMS41QzExLjkxOCAxMSAxMCA5LjkzMyAxMCA4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0MjQyNDIiIGQ9Ik0zNSA3QTEgMSAwIDEgMCAzNSA5IDEgMSAwIDEgMCAzNSA3ek0xMyA3QTEgMSAwIDEgMCAxMyA5IDEgMSAwIDEgMCAxMyA3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZGQwZTEiIGQ9Ik0zNywzNGMwLDQuNzc0LTMuMjE5LDEwLTEzLjMxLDEwQzE1LjU2OCw0NCwxMSwzOC43NzQsMTEsMzRjMC01LDEtNS44MDYsMS0xMGMwLTQuNjg4LDAtNywwLTEwIGMwLTQuNzc0LDMuMDc2LTExLDExLjY5LTExUzM2LDYuOTkxLDM2LDEzYzAsMy0wLjIzNyw1LjQ1MywwLDEwQzM2LjE4NiwyNi41NjIsMzcsMzEsMzcsMzR6Ij48L3BhdGg+PGc+PHBhdGggZmlsbD0iI2Y1ZjVmNSIgZD0iTTI5IDZBNCA0IDAgMSAwIDI5IDE0IDQgNCAwIDEgMCAyOSA2ek0xOSA2QTQgNCAwIDEgMCAxOSAxNCA0IDQgMCAxIDAgMTkgNnoiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iI2VlZSIgZD0iTTI0IDIwYzAgLjU1Mi40NDggMSAxIDFzMS0uNDQ4IDEtMXYtM2gtMlYyMHpNMjIgMjBjMCAuNTUyLjQ0OCAxIDEgMXMxLS40NDggMS0xdi0zaC0yVjIweiI+PC9wYXRoPjwvZz48cGF0aCBmaWxsPSIjZmZjYzgwIiBkPSJNMjYuNSwxOGMtMC40MTIsMC0wLjY1My0wLjA4NS0xLjAxMS0wLjIwNWMtMC45NzUtMC4zMjgtMi4wMjEtMC4zMjYtMi45OTYsMC4wMDIgQzIyLjEzOCwxNy45MTYsMjEuOTEsMTgsMjEuNSwxOGMtMS4zMzQsMC0xLjUtMS0xLjUtMS41YzAtMS41LDEuNS0yLjUsMy0yLjVjMC44MzUsMCwxLjE2NSwwLDIsMGMxLjUsMCwzLDEsMywyLjUgQzI4LDE3LDI3LjgzNCwxOCwyNi41LDE4eiI+PC9wYXRoPjxnPjxwYXRoIGZpbGw9IiM0MjQyNDIiIGQ9Ik0yNyA5QTEgMSAwIDEgMCAyNyAxMSAxIDEgMCAxIDAgMjcgOXpNMTcgOUExIDEgMCAxIDAgMTcgMTEgMSAxIDAgMSAwIDE3IDl6TTI0IDEzQTIgMSAwIDEgMCAyNCAxNSAyIDEgMCAxIDAgMjQgMTN6Ij48L3BhdGg+PC9nPjwvc3ZnPg=="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      Bootstrap
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $2367
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>



        <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-100 dark:border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h5 class="text-l font-bold leading-none text-gray-900 dark:text-black">
              Back End Development
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9ImdvcWZ1MVpObUVuVXJRREpFUTFiVWFfbDc1T0VVSmtQQWs0X2dyMSIgeDE9IjEwLjQ1OCIgeDI9IjI2LjMxNCIgeTE9IjEyLjk3MiIgeTI9IjI2LjI3NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzI2YWJlNyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA4NmRiZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNnb3FmdTFaTm1FblVyUURKRVExYlVhX2w3NU9FVUprUEFrNF9ncjEpIiBkPSJNMjQuMDQ3LDVjLTEuNTU1LDAuMDA1LTIuNjMzLDAuMTQyLTMuOTM2LDAuMzY3Yy0zLjg0OCwwLjY3LTQuNTQ5LDIuMDc3LTQuNTQ5LDQuNjdWMTRoOXYyIEgxNS4yMmgtNC4zNWMtMi42MzYsMC00Ljk0MywxLjI0Mi01LjY3NCw0LjIxOWMtMC44MjYsMy40MTctMC44NjMsNS41NTcsMCw5LjEyNUM1Ljg1MSwzMi4wMDUsNy4yOTQsMzQsOS45MzEsMzRoMy42MzJ2LTUuMTA0IGMwLTIuOTY2LDIuNjg2LTUuODk2LDUuNzY0LTUuODk2aDcuMjM2YzIuNTIzLDAsNS0xLjg2Miw1LTQuMzc3di04LjU4NmMwLTIuNDM5LTEuNzU5LTQuMjYzLTQuMjE4LTQuNjcyIEMyNy40MDYsNS4zNTksMjUuNTg5LDQuOTk0LDI0LjA0Nyw1eiBNMTkuMDYzLDljMC44MjEsMCwxLjUsMC42NzcsMS41LDEuNTAyYzAsMC44MzMtMC42NzksMS40OTgtMS41LDEuNDk4IGMtMC44MzcsMC0xLjUtMC42NjQtMS41LTEuNDk4QzE3LjU2Myw5LjY4LDE4LjIyNiw5LDE5LjA2Myw5eiI+PC9wYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iZ29xZnUxWk5tRW5VclFESkVRMWJVYl9sNzVPRVVKa1BBazRfZ3IyIiB4MT0iMzUuMzM0IiB4Mj0iMjMuNTE3IiB5MT0iMzcuOTExIiB5Mj0iMjEuMDM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmViNzA1Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZkYTFjIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2dvcWZ1MVpObUVuVXJRREpFUTFiVWJfbDc1T0VVSmtQQWs0X2dyMikiIGQ9Ik0yMy4wNzgsNDNjMS41NTUtMC4wMDUsMi42MzMtMC4xNDIsMy45MzYtMC4zNjdjMy44NDgtMC42Nyw0LjU0OS0yLjA3Nyw0LjU0OS00LjY3VjM0aC05di0yIGg5LjM0M2g0LjM1YzIuNjM2LDAsNC45NDMtMS4yNDIsNS42NzQtNC4yMTljMC44MjYtMy40MTcsMC44NjMtNS41NTcsMC05LjEyNUM0MS4yNzQsMTUuOTk1LDM5LjgzMSwxNCwzNy4xOTQsMTRoLTMuNjMydjUuMTA0IGMwLDIuOTY2LTIuNjg2LDUuODk2LTUuNzY0LDUuODk2aC03LjIzNmMtMi41MjMsMC01LDEuODYyLTUsNC4zNzd2OC41ODZjMCwyLjQzOSwxLjc1OSw0LjI2Myw0LjIxOCw0LjY3MiBDMTkuNzE5LDQyLjY0MSwyMS41MzYsNDMuMDA2LDIzLjA3OCw0M3ogTTI4LjA2MywzOWMtMC44MjEsMC0xLjUtMC42NzctMS41LTEuNTAyYzAtMC44MzMsMC42NzktMS40OTgsMS41LTEuNDk4IGMwLjgzNywwLDEuNSwwLjY2NCwxLjUsMS40OThDMjkuNTYzLDM4LjMyLDI4Ljg5OSwzOSwyOC4wNjMsMzl6Ij48L3BhdGg+PC9zdmc+"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      Python Development
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Django, Flask, Tensorflow
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjYjVjNGUwIiBkPSJNMzIgMTRBMzEgMTguMTc0IDAgMSAwIDMyIDUwLjM0OEEzMSAxOC4xNzQgMCAxIDAgMzIgMTRaIj48L3BhdGg+PHBhdGggZmlsbD0iI2NlZDllZCIgZD0iTTMyLDE0QzE0Ljg3OSwxNCwxLDIyLjEzNywxLDMyLjE3NHMxMy44NzksMTguMTc0LDMxLDE4LjE3NHMzMS04LjEzNywzMS0xOC4xNzRTNDkuMTIxLDE0LDMyLDE0eiBNMzIsNDUuMzQ4Yy0xNS4zMjIsMC0yNi02Ljk0Mi0yNi0xMy4xNzRDNiwyNS45NDMsMTYuNjc4LDE5LDMyLDE5czI2LDYuOTQzLDI2LDEzLjE3NEM1OCwzOC40MDUsNDcuMzIyLDQ1LjM0OCwzMiw0NS4zNDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzhkNmM5ZSIgZD0iTTQyLjQzNSAyNi40MzVsLTIuNzMzIDE0LjgyNmgzLjU2NmwuNzEtNC4wNDNoMi4yMTljNC42NDUgMCA3LjE3Mi0xLjA3NiA4LjExNy01LjA2Mi44MTMtMy40MjUtMS4yNjQtNS43Mi00LjY5LTUuNzJINDIuNDM1ek00Ni43ODYgMzQuNTIyaC0yLjMwNWwxLjAxOC01LjM5MWgyLjc3OGMyLjMwMiAwIDIuNzg2IDEuMDM4IDIuNjY2IDIuMTkzQzUwLjYzNCAzNC4yOTcgNDguNzggMzQuNTIyIDQ2Ljc4NiAzNC41MjJ6TTE0LjEzIDI2LjQzNWwtMi43MzMgMTQuODI2aDMuNTY2bC43MS00LjA0M2gyLjIxOWM0LjY0NSAwIDcuMTcyLTEuMDc2IDguMTE3LTUuMDYyLjgxMy0zLjQyNS0xLjI2NC01LjcyLTQuNjktNS43MkgxNC4xM3pNMTguNDgxIDM0LjUyMmgtMi4zMDVsMS4wMTgtNS4zOTFoMi43NzhjMi4zMDIgMCAyLjc4NiAxLjAzOCAyLjY2NiAyLjE5M0MyMi4zMjkgMzQuMjk3IDIwLjQ3NiAzNC41MjIgMTguNDgxIDM0LjUyMnpNMzkuMzExIDI3LjQxNWMtLjc2Mi0uNjk4LTIuMTA0LS45OC00LjEwNS0uOThoLTMuMTUzbDEuMTI0LTUuMzkxSDI5LjY0bC0zLjM3OSAxNi4xNzRoMy41MzhsMS43MDYtOC4wODdoMi44MjhjLjkwMiAwIDEuNDk3LjE1MSAxLjc3NS40NDkuMjc2LjMwMS4zMzcuODY3LjE3NyAxLjY4NmwtMS4yOTEgNS45NTJoMy41OTNsMS4zOTktNi40NEM0MC4yODYgMjkuMjM0IDQwLjA1OSAyOC4xMDIgMzkuMzExIDI3LjQxNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjOGQ2YzlmIiBkPSJNMzIgNTEuMzQ4Yy0xNy42NDUgMC0zMi04LjYwMi0zMi0xOS4xNzRTMTQuMzU1IDEzIDMyIDEzYzE3LjY0NSAwIDMyIDguNjAyIDMyIDE5LjE3NFM0OS42NDUgNTEuMzQ4IDMyIDUxLjM0OHpNMzIgMTVDMTUuNDU4IDE1IDIgMjIuNzA0IDIgMzIuMTc0czEzLjQ1OCAxNy4xNzQgMzAgMTcuMTc0IDMwLTcuNzA0IDMwLTE3LjE3NFM0OC41NDIgMTUgMzIgMTV6TTU4LjY5MyA1MC42NjdjLS4zMyAwLS42NTMtLjE2My0uODQ1LS40NjNsLTEuMDc0LTEuNjg3Yy0uMjk3LS40NjYtLjE1OS0xLjA4NC4zMDctMS4zODEuNDY0LS4yOTYgMS4wODMtLjE2IDEuMzgxLjMwN2wxLjA3NCAxLjY4N2MuMjk3LjQ2Ni4xNTkgMS4wODQtLjMwNyAxLjM4MUM1OS4wNjMgNTAuNjE2IDU4Ljg3NyA1MC42NjcgNTguNjkzIDUwLjY2N3pNNTQuNDQ2IDUzLjAwNGMtLjM3NSAwLS43MzQtLjIxMi0uOTA1LS41NzNsLS44NTQtMS44MDljLS4yMzUtLjQ5OS0uMDIxLTEuMDk2LjQ3OC0xLjMzMS41MDEtLjIzNyAxLjA5NS0uMDIxIDEuMzMxLjQ3OGwuODU0IDEuODA5Yy4yMzUuNDk5LjAyMSAxLjA5Ni0uNDc4IDEuMzMxQzU0LjczNCA1Mi45NzQgNTQuNTg5IDUzLjAwNCA1NC40NDYgNTMuMDA0ek00OS45NjkgNTQuODE3Yy0uNDE0IDAtLjgwMi0uMjYtLjk0NS0uNjczbC0uNjU0LTEuODkxYy0uMTgxLS41MjIuMDk3LTEuMDkyLjYxOC0xLjI3MnMxLjA5MS4wOTcgMS4yNzIuNjE4bC42NTQgMS44OTFjLjE4MS41MjItLjA5NyAxLjA5Mi0uNjE4IDEuMjcyQzUwLjE4OCA1NC44IDUwLjA3NyA1NC44MTcgNDkuOTY5IDU0LjgxN3pNNDUuMzQ0IDU2LjE3MWMtLjQ1MSAwLS44Ni0uMzA4LS45NzEtLjc2NmwtLjQ3LTEuOTQ0Yy0uMTMtLjUzNi4yLTEuMDc3LjczNy0xLjIwNi41MjktLjEzMSAxLjA3Ni4yIDEuMjA2LjczN2wuNDcgMS45NDRjLjEzLjUzNi0uMiAxLjA3Ny0uNzM3IDEuMjA2QzQ1LjUwMSA1Ni4xNjIgNDUuNDIyIDU2LjE3MSA0NS4zNDQgNTYuMTcxek00MC42MjEgNTcuMDkzYy0uNDg3IDAtLjkxNC0uMzU2LS45ODgtLjg1M2wtLjI5Ni0xLjk3OWMtLjA4MS0uNTQ2LjI5NS0xLjA1NS44NDItMS4xMzcuNTUyLS4wNzQgMS4wNTYuMjk2IDEuMTM3Ljg0MmwuMjk2IDEuOTc5Yy4wODEuNTQ2LS4yOTUgMS4wNTUtLjg0MiAxLjEzN0M0MC43MiA1Ny4wODkgNDAuNjcgNTcuMDkzIDQwLjYyMSA1Ny4wOTN6TTM1Ljg0MSA1Ny41OTZjLS41MjIgMC0uOTYzLS40MDYtLjk5Ny0uOTM2bC0uMTI5LTEuOTk2Yy0uMDM1LS41NTEuMzgzLTEuMDI2LjkzNC0xLjA2My41NDQtLjAyNyAxLjAyNy4zODMgMS4wNjMuOTM0bC4xMjkgMS45OTZjLjAzNS41NTEtLjM4MyAxLjAyNi0uOTM0IDEuMDYzQzM1Ljg4NSA1Ny41OTUgMzUuODYyIDU3LjU5NiAzNS44NDEgNTcuNTk2eiI+PC9wYXRoPjxnPjxwYXRoIGZpbGw9IiM4ZDZjOWYiIGQ9Ik0yMS44NjIsMjEuMTYxYy0wLjQ0OCwwLTAuODU2LTAuMzA0LTAuOTctMC43NTljLTAuMTMzLTAuNTM2LDAuMTk0LTEuMDc5LDAuNzI5LTEuMjEyIGMxLjM0NS0wLjMzNCwyLjc2Ni0wLjYxOCw0LjIyNC0wLjg0NWMwLjU0Ny0wLjA4NCwxLjA1NywwLjI4OSwxLjE0MiwwLjgzNGMwLjA4NSwwLjU0Ni0wLjI4OSwxLjA1Ny0wLjgzNCwxLjE0MiBjLTEuNCwwLjIxOC0yLjc2MiwwLjQ5LTQuMDQ5LDAuODFDMjIuMDIzLDIxLjE1MiwyMS45NDIsMjEuMTYxLDIxLjg2MiwyMS4xNjF6Ij48L3BhdGg+PC9nPjxnPjxwYXRoIGZpbGw9IiM4ZDZjOWYiIGQ9Ik02Ljk5OSwyOS45OTdjLTAuMTYzLDAtMC4zMjgtMC4wNC0wLjQ4MS0wLjEyNGMtMC40ODEtMC4yNjYtMC42NTktMC44NjktMC4zOTYtMS4zNTIgYzAuMTA5LTAuMiwyLjc2Ny00LjkyNSwxMS40MjQtOC4wOTFjMC41MTYtMC4xOTEsMS4wOTIsMC4wNzcsMS4yODIsMC41OTZjMC4xOSwwLjUxOS0wLjA3NywxLjA5My0wLjU5NiwxLjI4MiBjLTcuODg0LDIuODgzLTEwLjMzNCw3LjEzMy0xMC4zNTcsNy4xNzVDNy42OTIsMjkuODEyLDcuMzUsMjkuOTk3LDYuOTk5LDI5Ljk5N3oiPjwvcGF0aD48L2c+PC9zdmc+"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      PHP
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Laravel, Symphony
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRjQ0MzM2IiBkPSJNMjMuNjUsMjQuODk4Yy0wLjk5OC0xLjYwOS0xLjcyMi0yLjk0My0yLjcyNS01LjQ1NUMxOS4yMjksMTUuMiwzMS4yNCwxMS4zNjYsMjYuMzcsMy45OTljMi4xMTEsNS4wODktNy41NzcsOC4yMzUtOC40NzcsMTIuNDczQzE3LjA3LDIwLjM3LDIzLjY0NSwyNC44OTgsMjMuNjUsMjQuODk4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGNDQzMzYiIGQ9Ik0yMy44NzgsMTcuMjdjLTAuMTkyLDIuNTE2LDIuMjI5LDMuODU3LDIuMjk5LDUuNjk1YzAuMDU2LDEuNDk2LTEuNDQ3LDIuNzQzLTEuNDQ3LDIuNzQzczIuNzI4LTAuNTM2LDMuNTc5LTIuODE4YzAuOTQ1LTIuNTM0LTEuODM0LTQuMjY5LTEuNTQ4LTYuMjk4YzAuMjY3LTEuOTM4LDYuMDMxLTUuNTQzLDYuMDMxLTUuNTQzUzI0LjMxMSwxMS42MTEsMjMuODc4LDE3LjI3eiI+PC9wYXRoPjxnPjxwYXRoIGZpbGw9IiMxNTY1QzAiIGQ9Ik0zMi4wODQgMjUuMDU1YzEuNzU0LS4zOTQgMy4yMzMuNzIzIDMuMjMzIDIuMDEgMCAyLjkwMS00LjAyMSA1LjY0My00LjAyMSA1LjY0M3M2LjIyNS0uNzQyIDYuMjI1LTUuNTA1QzM3LjUyMSAyNC4wNTMgMzQuNDY0IDIzLjI2NiAzMi4wODQgMjUuMDU1ek0yOS4xMjkgMjcuMzk1YzAgMCAxLjk0MS0xLjM4MyAyLjQ1OC0xLjkwMi00Ljc2MyAxLjAxMS0xNS42MzggMS4xNDctMTUuNjM4LjI2OSAwLS44MDkgMy41MDctMS42MzggMy41MDctMS42MzhzLTcuNzczLS4xMTItNy43NzMgMi4xODFDMTEuNjgzIDI4LjY5NSAyMS44NTggMjguODY2IDI5LjEyOSAyNy4zOTV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTI3LjkzNSwyOS41NzFjLTQuNTA5LDEuNDk5LTEyLjgxNCwxLjAyLTEwLjM1NC0wLjk5M2MtMS4xOTgsMC0yLjk3NCwwLjk2My0yLjk3NCwxLjg4OWMwLDEuODU3LDguOTgyLDMuMjkxLDE1LjYzLDAuNTcyTDI3LjkzNSwyOS41NzF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTE4LjY4NiwzMi43MzljLTEuNjM2LDAtMi42OTUsMS4wNTQtMi42OTUsMS44MjJjMCwyLjM5MSw5Ljc2LDIuNjMyLDEzLjYyNywwLjIwNWwtMi40NTgtMS42MzJDMjQuMjcxLDM0LjQwNCwxNy4wMTQsMzQuNTc5LDE4LjY4NiwzMi43Mzl6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTM2LjI4MSwzNi42MzJjMC0wLjkzNi0xLjA1NS0xLjM3Ny0xLjQzMy0xLjU4OGMyLjIyOCw1LjM3My0yMi4zMTcsNC45NTYtMjIuMzE3LDEuNzg0YzAtMC43MjEsMS44MDctMS40MjcsMy40NzctMS4wOTNsLTEuNDItMC44MzlDMTEuMjYsMzQuMzc0LDksMzUuODM3LDksMzcuMDE3QzksNDIuNTIsMzYuMjgxLDQyLjI1NSwzNi4yODEsMzYuNjMyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxNTY1QzAiIGQ9Ik0zOSwzOC42MDRjLTQuMTQ2LDQuMDk1LTE0LjY1OSw1LjU4Ny0yNS4yMzEsMy4wNTdDMjQuMzQxLDQ2LjE2NCwzOC45NSw0My42MjgsMzksMzguNjA0eiI+PC9wYXRoPjwvZz48L3N2Zz4="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      Java
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Spring
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img alt="svgImg" class="w-8 h-8 rounded-full" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMzg4ZTNjIiBkPSJNMTcuMjA0IDE5LjEyMmwtNC45MDcgMi43MTVDMTIuMTEzIDIxLjkzOCAxMiAyMi4xMjYgMTIgMjIuMzI5djUuNDMzYzAgLjIwMy4xMTMuMzkuMjk3LjQ5Mmw0LjkwOCAyLjcxN2MuMTgzLjEwMS40MS4xMDEuNTkzIDBsNC45MDctMi43MTdDMjIuODg3IDI4LjE1MiAyMyAyNy45NjUgMjMgMjcuNzYydi01LjQzM2MwLS4yMDMtLjExMy0uMzktLjI5Ny0uNDkybC00LjkwNi0yLjcxNWMtLjA5Mi0uMDUxLS4xOTUtLjA3Ni0uMjk3LS4wNzYtLjEwMyAwLS4yMDUuMDI1LS4yOTcuMDc2TTQyLjQ1MSAyNC4wMTNsLS44MTguNDUyYy0uMDMxLjAxNy0uMDQ5LjA0OC0uMDQ5LjA4MnYuOTA2YzAgLjAzNC4wMTkuMDY1LjA0OS4wODJsLjgxOC40NTNjLjAzMS4wMTcuMDY4LjAxNy4wOTkgMGwuODE4LS40NTNjLjAzLS4wMTcuMDQ5LS4wNDguMDQ5LS4wODJ2LS45MDZjMC0uMDM0LS4wMTktLjA2NS0uMDUtLjA4MmwtLjgxOC0uNDUyQzQyLjUzNCAyNC4wMDQgNDIuNTE3IDI0IDQyLjUgMjRTNDIuNDY2IDI0LjAwNCA0Mi40NTEgMjQuMDEzIj48L3BhdGg+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZD0iTTM1Ljc1MSwxMy4zNjRsLTIuMzg5LTEuMzMzYy0wLjA3NS0wLjA0Mi0wLjE2Ny0wLjA0MS0wLjI0MSwwLjAwMyBjLTAuMDc0LDAuMDQ0LTAuMTIsMC4xMjMtMC4xMiwwLjIwOUwzMywyMC4yOTVsLTIuMjAzLTEuMjE5QzMwLjcwNSwxOS4wMjUsMzAuNjAyLDE5LDMwLjUsMTljLTAuMTAyLDAtMC4yMDUsMC4wMjUtMC4yOTcsMC4wNzYgaDAuMDAxbC00LjkwNywyLjcxNUMyNS4xMTMsMjEuODkyLDI1LDIyLjA4LDI1LDIyLjI4MnY1LjQzM2MwLDAuMjAzLDAuMTEzLDAuMzksMC4yOTcsMC40OTJsNC45MDgsMi43MTcgYzAuMTgzLDAuMTAxLDAuNDEsMC4xMDEsMC41OTMsMGw0LjkwNy0yLjcxN0MzNS44ODcsMjguMTA2LDM2LDI3LjkxOCwzNiwyNy43MTVWMTMuNzg4QzM2LDEzLjYxMiwzNS45MDQsMTMuNDUsMzUuNzUxLDEzLjM2NHogTTMyLjg2NiwyNi40NThsLTIuMjMsMS4yMzVjLTAuMDgzLDAuMDQ2LTAuMTg2LDAuMDQ2LTAuMjY5LDBsLTIuMjMxLTEuMjM1QzI4LjA1MSwyNi40MTIsMjgsMjYuMzI2LDI4LDI2LjIzNHYtMi40NyBjMC0wLjA5MiwwLjA1MS0wLjE3NywwLjEzNS0wLjIyNGwyLjIzMS0xLjIzNGgtMC4wMDFjMC4wNDItMC4wMjMsMC4wODgtMC4wMzQsMC4xMzUtMC4wMzRjMC4wNDcsMCwwLjA5MywwLjAxMiwwLjEzNSwwLjAzNCBsMi4yMywxLjIzNEMzMi45NDksMjMuNTg3LDMzLDIzLjY3MywzMywyMy43NjV2Mi40N0MzMywyNi4zMjYsMzIuOTQ5LDI2LjQxMiwzMi44NjYsMjYuNDU4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0xNy4yMDQsMTkuMTIyTDEyLDI3Ljc2MmMwLDAuMjAzLDAuMTEzLDAuMzksMC4yOTcsMC40OTJsNC45MDgsMi43MTcgYzAuMTgzLDAuMTAxLDAuNDEsMC4xMDEsMC41OTMsMEwyMywyMi4zMjljMC0wLjIwMy0wLjExMy0wLjM5LTAuMjk3LTAuNDkybC00LjkwNi0yLjcxNWMtMC4wOTItMC4wNTEtMC4xOTUtMC4wNzYtMC4yOTctMC4wNzYgYy0wLjEwMywwLTAuMjA1LDAuMDI1LTAuMjk3LDAuMDc2Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTE3LjIwNCwxOS4xMjJsLTQuOTA3LDIuNzE1QzEyLjExMywyMS45MzgsMTIsMjIuMTI2LDEyLDIyLjMyOWw1LjIwNCw4LjY0MiBjMC4xODMsMC4xMDEsMC40MSwwLjEwMSwwLjU5MywwbDQuOTA3LTIuNzE3QzIyLjg4NywyOC4xNTIsMjMsMjcuOTY1LDIzLDI3Ljc2MmwtNS4yMDMtOC42NGMtMC4wOTItMC4wNTEtMC4xOTUtMC4wNzYtMC4yOTctMC4wNzYgYy0wLjEwMywwLTAuMjA1LDAuMDI1LTAuMjk3LDAuMDc2Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZD0iTTQ3LjcwMyAyMS43OTFsLTQuOTA2LTIuNzE1QzQyLjcwNSAxOS4wMjUgNDIuNjAyIDE5IDQyLjUgMTljLS4xMDIgMC0uMjA1LjAyNS0uMjk3LjA3NmguMDAxbC00LjkwNyAyLjcxNUMzNy4xMTQgMjEuODkyIDM3IDIyLjA4NCAzNyAyMi4yOTR2NS40MTFjMCAuMjA5LjExNC40MDIuMjk3LjUwM2w0LjkwOCAyLjcxN2MuMTg0LjEwMi40MDkuMTAyLjU5MyAwbDIuMjYzLTEuMjUzYy4yMDctLjExNS4yMDYtLjQxMi0uMDAyLS41MjZsLTQuOTI0LTIuNjg3QzQwLjA1MiAyNi40MTIgNDAgMjYuMzI1IDQwIDI2LjIzMXYtMi40NjZjMC0uMDkyLjA1LS4xNzcuMTMtLjIyMWwyLjIzNS0xLjIzNmgtLjAwMWMuMDQyLS4wMjMuMDg4LS4wMzQuMTM1LS4wMzQuMDQ3IDAgLjA5My4wMTIuMTM1LjAzNGwyLjIzNSAxLjIzN2MuMDguMDQ0LjEzLjEyOS4xMy4yMjF2Mi4wMTJjMCAuMDg2LjA0Ni4xNjYuMTIxLjIwOS4wNzUuMDQyLjE2Ny4wNDIuMjQyLS4wMDFsMi4zOTgtMS4zOTNjLjE0OC0uMDg2LjI0LS4yNDUuMjQtLjQxN3YtMS44OEM0OCAyMi4wODUgNDcuODg2IDIxLjg5MiA0Ny43MDMgMjEuNzkxek0xMC43MDMgMjEuNzkxbC00LjkwNi0yLjcxNUM1LjcwNSAxOS4wMjUgNS42MDIgMTkgNS41IDE5Yy0uMTAyIDAtLjIwNS4wMjUtLjI5Ny4wNzZoLjAwMWwtNC45MDcgMi43MTVDLjExNCAyMS44OTIgMCAyMi4wODQgMCAyMi4yOTR2Ny40NjVjMCAuMDg2LjA0Ni4xNjYuMTIxLjIwOS4wNzUuMDQyLjE2Ny4wNDIuMjQyLS4wMDFsMi4zOTgtMS4zOTNDMi45MDkgMjguNDg4IDMgMjguMzI5IDMgMjguMTU3di00LjM5M2MwLS4wOTIuMDUtLjE3Ny4xMy0uMjIxbDIuMjM1LTEuMjM2SDUuMzY1Yy4wNDItLjAyMy4wODgtLjAzNC4xMzUtLjAzNC4wNDcgMCAuMDkzLjAxMi4xMzUuMDM0bDIuMjM1IDEuMjM3QzcuOTUgMjMuNTg4IDggMjMuNjczIDggMjMuNzY1djQuMzkzYzAgLjE3Mi4wOTEuMzMxLjI0LjQxN2wyLjM5OCAxLjM5M2MuMDc1LjA0My4xNjcuMDQzLjI0Mi4wMDFDMTAuOTU0IDI5LjkyNSAxMSAyOS44NDUgMTEgMjkuNzU5di03LjQ2NEMxMSAyMi4wODUgMTAuODg2IDIxLjg5MiAxMC43MDMgMjEuNzkxeiI+PC9wYXRoPjwvc3ZnPg=="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                     Node JS
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $367
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img alt="svgImg" class="w-8 h-8 rounded-full" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZjYzgwIiBkPSJNMzUuNTQ3IDQyLjQzMWwtMy4xODItMy4xODItMi4xMjEgMi4xMjEgMy4xODIgMy4xODJjLjU4Ni41ODYgMS41MzYuNTg2IDIuMTIxIDBTMzYuMTMzIDQzLjAxNyAzNS41NDcgNDIuNDMxek0zOC41NDcgMjQuNDMxbC0zLjE4Mi0zLjE4Mi0yLjEyMSAyLjEyMSAzLjE4MiAzLjE4MmMuNTg2LjU4NiAxLjUzNi41ODYgMi4xMjEgMFMzOS4xMzMgMjUuMDE3IDM4LjU0NyAyNC40MzF6TTEyLjY4MyA0Mi40MzFsMy4xODItMy4xODIgMi4xMjEgMi4xMjEtMy4xODIgMy4xODJjLS41ODYuNTg2LTEuNTM2LjU4Ni0yLjEyMSAwUzEyLjA5NyA0My4wMTcgMTIuNjgzIDQyLjQzMXpNOS40MzMgMjQuNDMxbDMuMTgyLTMuMTgyIDIuMTIxIDIuMTIxLTMuMTgyIDMuMTgyYy0uNTg2LjU4Ni0xLjUzNi41ODYtMi4xMjEgMFM4Ljg0NyAyNS4wMTcgOS40MzMgMjQuNDMxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZGQwZTEiIGQ9Ik0zOCA4YzAtMS45MzMtMS4xNDktMy0zLjIzMS0zUzMxIDcuNTY3IDMxIDkuNWMwIDEgMS45MjMgMS41IDMgMS41QzM2LjA4MiAxMSAzOCA5LjkzMyAzOCA4ek0xMCA4YzAtMS45MzMgMS4xNDktMyAzLjIzMS0zUzE3IDcuNTY3IDE3IDkuNWMwIDEtMS45MjMgMS41LTMgMS41QzExLjkxOCAxMSAxMCA5LjkzMyAxMCA4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0MjQyNDIiIGQ9Ik0zNSA3QTEgMSAwIDEgMCAzNSA5IDEgMSAwIDEgMCAzNSA3ek0xMyA3QTEgMSAwIDEgMCAxMyA5IDEgMSAwIDEgMCAxMyA3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZGQwZTEiIGQ9Ik0zNywzNGMwLDQuNzc0LTMuMjE5LDEwLTEzLjMxLDEwQzE1LjU2OCw0NCwxMSwzOC43NzQsMTEsMzRjMC01LDEtNS44MDYsMS0xMGMwLTQuNjg4LDAtNywwLTEwIGMwLTQuNzc0LDMuMDc2LTExLDExLjY5LTExUzM2LDYuOTkxLDM2LDEzYzAsMy0wLjIzNyw1LjQ1MywwLDEwQzM2LjE4NiwyNi41NjIsMzcsMzEsMzcsMzR6Ij48L3BhdGg+PGc+PHBhdGggZmlsbD0iI2Y1ZjVmNSIgZD0iTTI5IDZBNCA0IDAgMSAwIDI5IDE0IDQgNCAwIDEgMCAyOSA2ek0xOSA2QTQgNCAwIDEgMCAxOSAxNCA0IDQgMCAxIDAgMTkgNnoiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iI2VlZSIgZD0iTTI0IDIwYzAgLjU1Mi40NDggMSAxIDFzMS0uNDQ4IDEtMXYtM2gtMlYyMHpNMjIgMjBjMCAuNTUyLjQ0OCAxIDEgMXMxLS40NDggMS0xdi0zaC0yVjIweiI+PC9wYXRoPjwvZz48cGF0aCBmaWxsPSIjZmZjYzgwIiBkPSJNMjYuNSwxOGMtMC40MTIsMC0wLjY1My0wLjA4NS0xLjAxMS0wLjIwNWMtMC45NzUtMC4zMjgtMi4wMjEtMC4zMjYtMi45OTYsMC4wMDIgQzIyLjEzOCwxNy45MTYsMjEuOTEsMTgsMjEuNSwxOGMtMS4zMzQsMC0xLjUtMS0xLjUtMS41YzAtMS41LDEuNS0yLjUsMy0yLjVjMC44MzUsMCwxLjE2NSwwLDIsMGMxLjUsMCwzLDEsMywyLjUgQzI4LDE3LDI3LjgzNCwxOCwyNi41LDE4eiI+PC9wYXRoPjxnPjxwYXRoIGZpbGw9IiM0MjQyNDIiIGQ9Ik0yNyA5QTEgMSAwIDEgMCAyNyAxMSAxIDEgMCAxIDAgMjcgOXpNMTcgOUExIDEgMCAxIDAgMTcgMTEgMSAxIDAgMSAwIDE3IDl6TTI0IDEzQTIgMSAwIDEgMCAyNCAxNSAyIDEgMCAxIDAgMjQgMTN6Ij48L3BhdGg+PC9nPjwvc3ZnPg=="/>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                      GoLang
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $2367
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>


        </div>



      </div>
    </section>
  );
}

export default CSDView;
