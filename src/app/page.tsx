import Image from 'next/image'
import image2 from 'images/bg-main-mobile.png'

export default function Home() {
  return (
    <main className="">
      <Image src={image2} alt="" />
      <div>
        <form action="">
          <label htmlFor="">
            <p>CARDHOLDER NAME</p>
            <input type="text" />
          </label>

          <label htmlFor="">
            <p>CARD NUMBER</p>
            <input type="number" />
          </label>

          <div className="flex flex-row">
            <label htmlFor="">
              <p>EXP.DATE (MM/YY)</p>
              <input type="text" />
            </label>

            <label htmlFor="">
              <p>CVC</p>
              <input type="text" />
            </label>
          </div>
          <button>Confirm</button>
        </form>
      </div>
    </main>
  )
}
