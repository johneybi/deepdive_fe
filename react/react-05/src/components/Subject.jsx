import { useState } from 'react';

function Subject() {
 
    const options = [
        { label: '리액트', value: 'react' },
        { label: '뷰', value: 'vue' },
        { label: '스벨트', value: 'Svelte' }
    ];

    const [selectedValue, setSelectedValue] = useState(options[0].value);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
            <div>
                <h2 className="text-xl font-bold text-gray-800">과목 선택</h2>
                <select 
                    value={selectedValue} 
                    onChange={handleChange}
                    className="block w-full p-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="mt-4">
                    <p className="text-gray-700">
                        선택된 과목: <span className="font-semibold text-indigo-600">{selectedValue}</span>
                    </p>
                </div>
            </div>

            <div>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="내용을 입력하세요..."
                    className="block w-full p-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="text-gray-700 mt-4">
                    입력값: <span className="font-semibold text-indigo-600">{inputValue}</span>
                </p>
            </div>
        </div>
    );
}

export default Subject;
