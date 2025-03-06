// App import
import NetworkError from '../../assets/networkError.jpg'
const ErrorScreen: React.FC<{error:string}> = ({error}) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-10'>
      <img src={NetworkError} alt="Network req failed" />
      <h2 className='text-3xl text-gray-800'>Try again / Check your network connection</h2>
      <h4>Error Msg: {error.toString()}</h4>
    </div>
  )
}

export default ErrorScreen
