import { useCallback, useState } from "react";

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState("");

    const handleChange = useCallback(event => {
        const { name, value, type, checked } = event.target;
        setValues(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
        setError("");
    }, []);

    return { values, setValues, handleChange, error, setError };
}
