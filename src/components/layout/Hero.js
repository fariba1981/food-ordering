import Image from 'next/image'
import Right from '../icons/Right'

export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a
          <span className='text-primary'> Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh
          nisl condimentum id venenatis a condimentum vitae sapien.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            order now
            <Right />
          </button>
          <button className="flex items-center gap-2 py-2 border-0 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src="/pizza.png" alt="pizza" layout="fill" objectFit="contain" />
      </div>
    </section>
  )
}
