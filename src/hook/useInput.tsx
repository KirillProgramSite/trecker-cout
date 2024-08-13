import { useState } from 'react';

type UseInputReturn = {
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
};

function useInput(initialValue: string = ''): UseInputReturn {
    const [value, setValue] = useState<string | undefined>(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue('');
    };

    return {
        value,
        onChange: handleChange,
        reset,
    };
}

export default useInput;