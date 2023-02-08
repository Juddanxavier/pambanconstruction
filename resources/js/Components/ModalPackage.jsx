import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function Modal({ setOpenModal, packageName }) {
  const { flash } = usePage().props
  const { data, setData, post, processing, reset, errors  } = useForm({
    name: "",
    phone: "",
    email: "",
    package: packageName
  })
    const submit = (event) => {
    event.preventDefault()
    post(route('pages.sendmailpackage'), {
      preserveScroll: true,
        onSuccess: () => {
          setOpenModal(false)
        reset()
      }
    }, data)
    }

    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setOpenModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3 flex">
                            <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                <h4 className="text-lg font-medium text-gray-800">
                                    Delete account ?
                                </h4>
                                <div className="mt-2 leading-relaxed text-gray-500">
                                     <form>
              <div className="mb-6">
  <label className="block mb-2 text-md font-bold text-gray-800">Your name</label>
              <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name " value={data.name} onChange={(e) => setData('name', e.target.value)} />
              {errors.name && <div className="text-red-600">{errors.name}</div>}
  {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> */}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-bold text-gray-900">Your Phone number</label>
              <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Phone Number" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
              {errors.phone && <div className="text-red-600">{errors.phone}</div>}
        </div>
<div className="mb-6">
  <label className="block mb-2 text-md font-bold text-gray-900">Your Email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
              {errors.email && <div className="text-red-600">{errors.email}</div>}
  {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p> */}
</div>
            {/* <div className="mb-6">
              <label className="block mb-2 text-md font-bold text-gray-900 dark:text-white">Your message</label>
              <textarea name="messages" id="comment" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment" value={packageName} onChange={(e) => setData('messages', e.target.value)}></textarea>
              {errors.package && <div className="text-red-600">{errors.package}</div>}
</div> */}
<button onClick={submit} type="submit" disabled={processing} className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Let's Talk <ArrowTrendingUpIcon className="w-6 ml-2" /></button>
          </form>
                                </div>
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                        onClick={() => setOpenModal(false)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                        onClick={() => setOpenModal(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}    