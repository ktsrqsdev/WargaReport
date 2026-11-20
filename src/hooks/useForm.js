import { useCallback, useState } from "react";

// State form sederhana: values + pesan error yang otomatis hilang saat user mengetik.
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
