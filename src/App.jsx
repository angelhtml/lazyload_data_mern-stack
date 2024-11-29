import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const size = 5

function App() {
  const [newsText, setNewsText] = useState([]);
  const [page,setPage]= useState(1);
  const [more, setMore] = useState(true)
  const [loader, setLoader] = useState("Loading ...")

  const fetchMoreData =  ()=>{
    setPage(page+1);
    axios({
      method:"GET",
      url:`http://localhost:3001/api/?page=${page}&size=${size}`,
    })
    .then( function (res){
      if (res.status === 200) {
        // end of the data
        if(res.data[0] == undefined){
          setMore(false)
        }
        if(res.data){
          setNewsText(newsText.concat(res.data))
        }
      }
    })
    .catch( function (err){
      console.log(err)
      setLoader("bad network !")
    })
  }
        
  useEffect(() => {
    fetchMoreData()
  },[])


  return (
    <div className='dark:bg-gound_dark dark:text-white'>
      
      <div className="flex flex-wrap gap-2 justify-center">
        <InfiniteScroll
          dataLength={newsText.length}
          next={fetchMoreData}
          //hasMore={newsText.length}
          hasMore={more}
          //you can create a spinner component which will be
          //displayed when the Items are being loaded
          //loader={newsText.length? <>loader</>: <p>Loading ...</p>}
          loader={<div className="w-64 h-96 flex items-center justify-center border-purple-500 border-2 rounded-md bg-purple-700 animate-pulse"><b className='text-white'>Loading</b></div>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }

          // below props only if you need pull down functionality
          refreshFunction={fetchMoreData}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
        >

        <div className="flex flex-wrap gap-2 justify-center">
          {newsText && newsText.map(i => <div key={i._id} className="w-64 h-96 flex items-center justify-center border-purple-500 border-2 rounded-md bg-purple-700"><b className='text-white'>{i.title}</b></div>)}
        </div>

        </InfiniteScroll>
      </div>

    </div>
  )
}

export default App
