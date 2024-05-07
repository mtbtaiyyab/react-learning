import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [errror, disableError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data form server....');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                    disableError(null);
                })
                .catch(err => {
                    console.log(err.message);
                    disableError(err.message);
                    setLoading(false);
                });
        }, 1000);
    }, [url]);
    return { data, isLoading, errror }
}

export default useFetch;