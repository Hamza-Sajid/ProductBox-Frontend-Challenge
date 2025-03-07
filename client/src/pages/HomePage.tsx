// App imports
import PageCard from '../components/PagesCard/PageCard'
import { pagesCard } from '../constants/constant';

const HomePage = () => {
  return (
    <div>
      <h2 className='text-4xl p-6'>Explore</h2>
      <hr className='text-gray-200' />
      <div className='p-12 flex gap-16 justify-center'>
        {pagesCard.map((page, index) => {
          return (
            <PageCard key={index} path={page.path} title={page.title} thumbnail={page.thumbnail} description={page.description} />
          )
        })}
      </div>

    </div>
  )
}

export default HomePage