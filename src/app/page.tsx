import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='flex items-center justify-center min-h-[calc(100vh-56px)]'>
        <article className='text-center'>
          <h1 className='text-6xl font-black'>HOW TO HAVE BETTER SOFTWARE</h1>
          <p className='mt-16 max-w-xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat voluptate sapiente ab velit fuga, nihil nisi? Iure, quis. Aliquid autem architecto quibusdam consequuntur inventore expedita harum distinctio illum ab.
          </p>
          <button className='bg-red-600 text-white px-7 py-2 rounded-md uppercase font-bold mt-7'>
            Lets assess it
          </button>
        </article>
      </section>

      <section>
        <div className='bg-primary-darker rounded-lg mx-12 p-12 text-white'>
          <article className='text-center text-white mt-8'>
            <h2 className='text-5xl font-bold'>Assessment kits</h2>
            <p className='mt-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus expedita laudantium velit. Ea asperiores culpa perspiciatis, similique corrupti sequi aut molestias qui distinctio et? Voluptates impedit iure nulla unde veritatis!</p>
          </article>
          <div className='flex justify-between mt-12'>
            <div className='flex flex-1 max-w-xl'>
              <div className='w-2 rounded-md bg-secondary mr-2'></div>
              <article>
                <h4>
                  Evaluate software
                </h4>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, vero ipsa ab excepturi error quaerat minus beatae! Nulla odit temporibus distinctio quae amet?
                </p>
              </article>
            </div>
            <div className='w-8'></div>
            <div className='bg-white p-4 rounded-lg flex-1 text-black'>
              <h4>Sample assessment test</h4>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-24'>
        <div className='mx-12'>
          <div className='mt-8'>
            <h2 className='text-4xl font-bold'>Flickit Features</h2>
            <p className='mt-2 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-wrap mt-6'>
            <div className='flex'>
              <div>image</div>
              <article>
                <h6>Conduct 360° system evaluation with
                  comprehensive reports</h6>
                <p>
                  You can view your insights in a many way such as charts and status. we have a subject and overall status for you to have comprehensive view.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>


      <section className='mt-24'>
        <div className='bg-primary-dark p-10'>
          <div className='mt-8 text-center text-white'>
            <h2 className='text-4xl font-bold'>What do people say about us?</h2>
            <p className='mt-2 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-wrap mt-28'>
            <div className='flex bg-white text-black rounded-2xl rounded-tl-none p-6 flex-1'>
              <div>image</div>
              <article>
                <h6>Conduct 360° system evaluation with
                  comprehensive reports</h6>
                <p>
                  You can view your insights in a many way such as charts and status. we have a subject and overall status for you to have comprehensive view.
                </p>
              </article>
            </div>
            <div className='p-4'></div>
            <div className='flex bg-white text-black rounded-2xl rounded-tl-none p-6 flex-1'>
              <div>image</div>
              <article>
                <h6>Conduct 360° system evaluation with
                  comprehensive reports</h6>
                <p>
                  You can view your insights in a many way such as charts and status. we have a subject and overall status for you to have comprehensive view.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-24'>
        <div className='p-10'>
          <div className='mt-8 text-center'>
            <h2 className='text-4xl font-bold'>Frequently asked questions</h2>
            <p className='mt-2 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-wrap mt-28'>
            <div className='flex bg-white text-black rounded-xl p-6 flex-1 transition-shadow duration-300 shadow-md hover:shadow-lg border border-gray-100'>
              <div>image</div>
              <article>
                <h6>Conduct 360° system evaluation with
                  comprehensive reports</h6>
                <p>
                  You can view your insights in a many way such as charts and status. we have a subject and overall status for you to have comprehensive view.
                </p>
              </article>
            </div>
            <div className='p-4'></div>
            <div className='flex bg-white text-black rounded-xl p-6 flex-1 transition-shadow duration-300 shadow-md hover:shadow-lg border border-gray-100'>
              <div>image</div>
              <article>
                <h6>Conduct 360° system evaluation with
                  comprehensive reports</h6>
                <p>
                  You can view your insights in a many way such as charts and status. we have a subject and overall status for you to have comprehensive view.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
