import React, {useEffect,useState} from 'react';

const DonutProgress = ({ percentage, topic ,radius,innerCircleWidth,outerCircleWidth,outerColor,outerBorderColor,innerColor,innerBorderColor,children,time,animation}) => {
    const radii=radius!==undefined?radius:45;
    const circumference = 2 * Math.PI * radii;
    const [perc, setPerc] = useState(0)
    const [strokeDashoffset,setStrokeDashoffset] = useState(circumference - (perc / 100) * circumference);
    const outerCircumference=(2 * Math.PI * (radii-0.5+(outerCircleWidth!==undefined?outerCircleWidth/2:5)))
    const innerCircumference=(2 * Math.PI * (radii-(outerCircleWidth!==undefined?outerCircleWidth/2:5)))
    const outer= (outerCircumference)-(percentage / 100) * (outerCircumference);
    const inner= (innerCircumference)-(percentage / 100) * (innerCircumference);

    console.log()
    useEffect(()=>{
        console.log(perc)
        if(animation!==undefined?animation:true) {
            if (perc <= percentage) {
                setTimeout(() => {
                    setPerc(perc + 1)
                    setStrokeDashoffset(circumference - (perc / 100) * circumference)
                }, time !== undefined ? time / percentage * 1000 : 10)
            }
        }
    },[perc])
    return (
        <div className="relative h-full w-full p-2" onMouseEnter={()=>setPerc(0)}>
            <svg viewBox="0 0 100 100" className="absolute top-0 left-0">
                <circle
                    cx="50"
                    cy="50"
                    r={radii}
                    className="text-gray-300"
                    strokeWidth={(innerCircleWidth!==undefined?innerCircleWidth:10).toString()}
                    stroke={innerColor!==undefined?innerColor:"orange"}
                    fill="none"
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radii-0.5+(innerCircleWidth!==undefined?innerCircleWidth/2:5)}
                    stroke={innerBorderColor!==undefined?innerBorderColor:"yellow"}
                    className="text-gray-300"
                    strokeWidth={1}
                    fill="none"
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radii-(innerCircleWidth!==undefined?innerCircleWidth/2:5)}
                    stroke={innerBorderColor!==undefined?innerBorderColor:"yellow"}
                    className="text-gray-300"
                    strokeWidth={1}
                    fill="none"
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radii}
                    className="text-indigo-500"
                    stroke={outerColor!==undefined?outerColor:"blue"}
                    strokeWidth={(outerCircleWidth!==undefined?outerCircleWidth:10).toString()}
                    fill="none"

                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                />
                <circle
                    transform="rotate(-1 50 50)"
                    cx="50"
                    cy="50"
                    r={radii-(outerCircleWidth!==undefined?outerCircleWidth/2:5)}
                    className="text-gray-300"
                    strokeWidth={1}
                    stroke={outerBorderColor?outerBorderColor:"skyblue"}
                    fill="none"
                    strokeDasharray={innerCircumference+2}
                    strokeDashoffset={inner}
                />
                <circle
                    transform="rotate(-1 50 50)"
                    cx="50"
                    cy="50"
                    r={radii-0.5+(outerCircleWidth!==undefined?outerCircleWidth/2:5)}
                    className="text-gray-300"
                    strokeWidth={1}
                    stroke={outerBorderColor?outerBorderColor:"skyblue"}
                    fill="none"
                    strokeDasharray={outerCircumference+2}
                    strokeDashoffset={outer}
                />

            </svg>
            {
                children!==undefined?children:
                    <div className="mx-auto center text-center text-white text-lg top-1/3 relative">
                        <div className="text-center text-white text-5xl font-medium">
                            {percentage}%
                        </div>
                        {topic}
                    </div>
            }
        </div>
    );
};

export default DonutProgress;
