import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url, header) => {
    const [data, setData] = useState(initialData)

    return [data]
}
export default useRequestData