import React from 'react';
import ProgressBar from "./ProgressBar";
const App = () => {
    return (
        <div className="bg-black flex flex-row h-screen w-full pt-20 px-36 space-x-1 justify-between">
            <div className="h-64 w-64">
                <ProgressBar
                    percentage={70}
                    topic={'Donut 1'}
                    radius={45}
                />
            </div>
            <div className="h-64 w-64">
                <ProgressBar
                    percentage={50}
                    topic={'Donut 2'}
                    radius={45}
                    innerCircleWidth={5}
                    innerColor={'pink'}
                    innerBorderColor={'red'}
                    outerColor={'skyblue'}
                    outerBorderColor={'white'}
                    outerCircleWidth={7}
                    time={3}
                />
            </div>
            <div className="h-64 w-64">
                <ProgressBar
                    percentage={90}
                    topic={'Donut 2'}
                    radius={45}
                    innerCircleWidth={5}
                    innerColor={'rgb(100, 0, 0)'}
                    innerBorderColor={'rgb(204,93,1)'}
                    outerColor={'rgb(0, 50, 0)'}
                    outerBorderColor={'rgb(208,191,9)'}
                    outerCircleWidth={10}
                    time={0.5}
                />
            </div>
            <div className="h-64 w-64">
                <ProgressBar
                    percentage={90}
                    topic={'Donut 2'}
                    radius={45}
                    innerCircleWidth={5}
                    innerColor={'rgba(89,215,0,0.54)'}
                    innerBorderColor={'rgb(204,93,1)'}
                    outerColor={'rgba(3,189,255,0.53)'}
                    outerBorderColor={'rgb(255,255,255)'}
                    outerCircleWidth={10}
                    animation={true}
                    time={10}
                >
                    <div className="text-center text-transparent top-16 relative mx-6 py-4 text-md bg-clip-text bg-gradient-to-r from-pink-500 via-emerald-500 to-amber-400 shadow-amber-50 shadow p-2 rounded-full">
                        Just pass children and you can even render inside
                    </div>
                </ProgressBar>
            </div>
        </div>
    );
};

export default App;
