/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

export default function PhonePanel() {
    const [open, setOpen] = useState(true)

    return (
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">

                                <h3 className="text-lg leading-6 font-medium text-gray-900">????????????</h3>

                                <form className="mt-5 sm:flex sm:items-center">
                                    <div className="w-full sm:max-w-xs">
                                        <label htmlFor="email" className="sr-only">
                                            Email
                                        </label>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                ????????????????????????????????????????????????????????????????????????
                                            </p>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="??????????????????"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        ???????????????
                                    </button>
                                </form>

                                <form className="mt-5 sm:flex sm:items-center">
                                    <div className="w-full sm:max-w-xs">
                                        <label htmlFor="email" className="sr-only">
                                            Email
                                        </label>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                ????????????????????????
                                            </p>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="??????????????????"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        ???????????????
                                    </button>
                                </form>


                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

    )
}
