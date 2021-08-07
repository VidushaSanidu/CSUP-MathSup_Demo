import Report from './Report'
import useFetch from './useFetch';

function Home() {

    const { data: reports} = useFetch('https://jsonplaceholder.typicode.com/posts');
      
    return (
        <div className='posts-list'>
            <div className='posts-container'>
            {reports ? (
                reports.map((report) =>
                <Report daata={report} key={report.id}/>)
            ) : (  
                <p>loading...</p>
            )
        }
        </div>
        </div>
    
);

}

export default Home;
