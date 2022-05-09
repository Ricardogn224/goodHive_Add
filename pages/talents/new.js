import Head from 'next/head' // TODO: add Head
import Link from 'next/link'
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useCombobox } from 'downshift'

import { menuStyles } from '../../lib/utils'
import useWeb3 from '../../lib/wallet/use-web3'

const navigation = [
  { name: 'Talents', href: '#', current: true },
  { name: 'Jobs', href: '#', current: false },
  { name: 'About', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const countries = [
  'France',
  'France Paris',
  'Espagne',
  'Portugal',
  'États-Unis',
  'Finlande'
]

export default function Home() {
  const [inputItems, setInputItems] = useState(countries)
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        countries.filter(item =>
          item.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      )
    },
  })

  const {
    connectedAddress,
    connectWallet
  } = useWeb3()

  return (
    <div className="min-h-screen flex flex-col">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center text-white text-xl">
                      GoodHive
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Metamask */}
                  <button
                    className={
                      'bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium'
                    }
                    onClick={connectWallet}
                  >
                    { connectedAddress ? connectedAddress : 'Connect to Web3' }
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Profile</h1>
        </div>
      </header>

      
      <main>
        <div className="flex-1 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div>
                <input id="skill" placeholder="Firstname" className="w-[30vw] ml-[1vw] p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
              </div>
              <div>
                <input id="skill" placeholder="Lastname" className="w-[30vw] ml-[1vw] p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
              </div>
            </div>
            <div className="flex flex-row pt-5">
              <div>
                <input id="skill" placeholder="Country" className="w-[30vw] ml-[1vw] p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
              </div>
              <div>
                <input id="skill" placeholder="City" className="w-[30vw] ml-[1vw] p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
              </div>
            </div>
            <div className="flex flex-row pt-5">
              <div>
                <input id="skill" placeholder="Email" type="email" className="w-[30vw] ml-[1vw] p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
              </div>
              <div>
                <input id="skill" placeholder="Telegram" className="w-[30vw] ml-[1vw] p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
              </div>
            </div>
            <div className="pt-5">
              <textarea id="skill" placeholder="Description" className="w-[61vw] h-[10vw]  ml-[1vw] mr-3 p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
            </div>
          </div>
          <div className="pt-5">
            <textarea id="skill" placeholder="Who are you in a few words...." className="w-[61vw] h-[10vw] ml-[1vw] mr-3 p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        </div>

        <div className="flex-1 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div>
              <input id="skill" placeholder="Solidity, Javascript, React..." className="w-[61vw] ml-[1vw] mr-3 p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Rate</h2>
        </div>

        <div className="flex-1 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div>
              <input id="skill" placeholder="Add your rate" type="number" className="w-[30vw] ml-[1vw] p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 shadow rounded-md" />
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 text-right">
          <div className="w-[61vw] ml-[1vw] mr-3 p-2">
            <button className={
              'bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium'
            }>
              Save Profile
            </button>
          </div>
        </div>
      </main>


      <hr />
      <footer className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8 text-xs text-gray-500 text-center">
        GoodHive 2022
      </footer>
    </div>
  )
}