import React, { useEffect } from 'react'


type Posts = {
  userId: number
  id: number
  title: string
  body: string
}

function Home() {

  //  const [count, setCount] = React.useState(0)
  // const [text, setText] = React.useState('')

  // React.useEffect(() => {
  //   console.log('Home');
  //   console.log("count:", count);
    
  // }, [count])

  // React.useEffect(() => {
  //   console.log('test');
    
  // })

  // useEffect(() => {

  //   const timer = setInterval(() => {
  //     console.log('timer');
  //     setCount((prevCount) => prevCount + 1)
  //   }, 1000)
    
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  const [data, setData] = React.useState<Posts[]>([])

  useEffect(() => {
    console.log('Home');
    handleFetch()
  }, [])

  const handleFetch = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/postsd')

      if (!response.ok) {
        throw new Error('Something went wrong while fetching the data from the server :(')
      }
      const data = await response.json()
      console.log("data: ", data);
      
      setData(data)
      console.log(data);
    }
    catch (error) {
      console.log("error: ", error);
    }
  }

  return (
    <div style={{marginTop:"100px"}}>Home
    {/* <input type="text" onChange={(e) => setText(e.target.value)}  /> */}
    {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
    {/* count: {count} */}

    {data.length > 0 && data?.map((item:Posts,index:number) => (
      <div key={item.id}>{item.title}{index}</div>
    ))}
    </div>
  )
}

export default Home