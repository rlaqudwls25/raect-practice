import { ReactElement } from 'react'

interface MyLoaderProps {
  isLoading?: boolean;
  children: ReactElement
}

function MyLoader(props: MyLoaderProps): ReactElement<any> {

  const { isLoading, children } = props

  return isLoading ? <h1>...Loading</h1> : children

}

export default MyLoader