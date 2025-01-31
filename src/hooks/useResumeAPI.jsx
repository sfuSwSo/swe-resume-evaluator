import { useState } from 'react';
import { useApiResponseContext } from '../context/apiResponseContext';

export const useResumeApi = () => {
    const [state, dispatch] = useApiResponseContext();
    const [apiResponse, setApiResponse] = useState(state.routes.resume);

    const evaluateResume = (resumeFile) => {
        if (!resumeFile) {
            throw new Error('file is undefined');
        }
        dispatch({
            action: 'UPDATE_RESUME_RESPONSE',
            value: null,
        });
        setApiResponse(null);

        const data = new FormData();
        data.append('file', resumeFile);
        try {
            fetch(
                `http://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/resume`,
                {
                    method: 'POST',
                    body: data,
                    mode: 'cors',
                },
            )
                .then((res) => {
                    console.log(res);
                    return res;
                })
                .then((res) => res.json())
                .then((res) => {
                    setApiResponse(res);
                    dispatch({
                        action: 'UPDATE_RESUME_RESPONSE',
                        value: res,
                    });
                    console.log(res);
                });
        } catch (error) {
            throw new Error(`useResumeApi Error: ${JSON.stringify(error)}`);
        }
    };

    return { evaluateResume, apiResponse };
};
