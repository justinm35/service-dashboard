"use client"
import { FC } from 'react'

interface serviceRequestProps {}

const serviceRequest: FC<serviceRequestProps> = ({}) => {


  return (
  <div className='w-full h-full flex justify-center'>
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 ">Request a Service Call</h2>
      <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
              <label htmlFor="category" className="block mb-2 text-lg font-medium text-gray-900">Which item needs service?</label>
                  <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5">
                      <option value="">Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                  </select>
              </div>
              <div className='sm:col-span-2'>
                <h3 className="mb-2 text-lg font-medium text-gray-900">What is the type of issue you are having? (Select One)</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input type="radio" id="damage" name="hosting" value="damage" className="hidden peer" required/>
                        <label htmlFor="damage" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:peer-checked:text-indigo-500 peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100">                           
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Damaged Item</div>
                                <div></div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="service" name="hosting" value="service" className="hidden peer" required/>
                        <label htmlFor="service" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:peer-checked:text-indigo-500 peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100">                           
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Regular Service</div>
                                <div></div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="repair" name="hosting" value="repair" className="hidden peer" required/>
                        <label htmlFor="repair" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:peer-checked:text-indigo-500 peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100">                           
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Repair</div>
                                <div></div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="other" name="hosting" value="other" className="hidden peer" required/>
                        <label htmlFor="other" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:peer-checked:text-indigo-500 peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100">                           
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Other</div>
                                <div></div>
                            </div>
                        </label>
                    </li>
                </ul>

              </div>
              <div className='sm:col-span-2'>
                  <label htmlFor="item-weight" className="block mb-2 text-lg font-medium text-gray-900">How long has this been an issue?</label>
                  <input type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="12"/>
              </div> 
              <div className="sm:col-span-2">
                  <label htmlFor="description" className="block mb-2 text-lg font-medium text-gray-900">Give us a breif description about the issue</label>
                  <textarea id="description" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-orange-400 rounded-lg focus:ring-4 focus:ring-orange-300 hover:bg-orange-500 transition">
              Send Request
          </button>
      </form>
  </div>
  </div>)
}

export default serviceRequest