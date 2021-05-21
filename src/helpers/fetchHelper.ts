async function fetchHelper(
    url: string,
    options: {
        token?: string | null;
        fetchOptions?: RequestInit;
    } = {
        token: null,
        fetchOptions: { method: 'GET' }
    }
): Promise<Response> {
    const { token, fetchOptions } = options;

    try {
        let headers = { ...fetchOptions?.headers };
        if (token) {
            headers = { ...headers, Authorization: `Bearer ${token}` };
        }

        const response = await fetch(url, { ...fetchOptions, headers });
        if (!response.ok) throw response;

        return response;
    } catch (error) {
        return error;
    }
}

export default fetchHelper;
