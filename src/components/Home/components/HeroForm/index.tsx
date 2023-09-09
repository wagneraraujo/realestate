"use client"
import {useForm} from 'react-hook-form'

export default function HeroForm() {

    const { register, handleSubmit, formState:{errors} } = useForm()
    const onSubmit = (data:any) => console.log(data)
  return (
    <div className='bg-white p-4 w-full ml-10 border-r-4 border-spacing-3'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <label
  htmlFor="UserEmail"
  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="email"
    id="UserEmail"
    {...register("email", {required : true})}
    placeholder="Email"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Email
  </span>
</label>


<label
  htmlFor="UserEmail"
  className="relative block  overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="text"
    id="username"
    placeholder="Nome"
    {...register("name", {required : true})}
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Nome
  </span>
</label>
<button
    className="px-5 py-3 text-white duration-150 bg-blue-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
    type='submit'
>
    Enviar
</button>
        </form>
    </div>
  )
}
