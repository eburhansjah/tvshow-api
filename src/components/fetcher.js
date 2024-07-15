import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json())

// Function to fetch tv show data
export function useTvShow(){
    const{data, error, isLoading} = useSWR("https://api.tvmaze.com/shows", fetcher)

    return{
        data,
        error,
        isLoading
    };
}