import React,{useState,useEffect} from 'react'
import { data, Link, useNavigate } from 'react-router'
import {api} from './SubComponents/API'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitted = (data) => {
    axios.post(`${api}/api/v1/users/login/`, data)
    .then((res) => {
      localStorage.setItem('accessToken', res.data.message.access)
      localStorage.setItem('userinfo', JSON.stringify(res.data.message.data) )
      console.log(res,'user');
      
      localStorage.setItem('loggedIn', true)
      navigate('/profile')
      
    })
    .catch((err) => {
      toast('unauthorized')
    })
  }
  
  return (
    <div>
        <div className="flex h-lvh flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-emerald-100">
            <div className='bg-white lg:w-md m-auto lg:py-20 rounded-2xl w-90 p-5'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form onSubmit={handleSubmit(formSubmitted)} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  {...register('email')}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  {...register('password')}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register Now
            </Link>
          </p>
        </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login