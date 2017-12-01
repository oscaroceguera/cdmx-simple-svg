import React from 'react'
import './styles.css'

import delegaciones from './delegaciones'

const Path = ({ id, path, onClick }) => <path id={id} onClick={onClick} d={path} className='pathClass' />

const Text = ({ x, y, children, id }) =>
  <text className='txtClass' x='149.16301' y='323.62122' id='text2397'>
    {children}
  </text>

const CDMXMap = ({ width, height, onClick }) => (
  <svg width={width} height={height}>
    <title>Ciudad de Mexico</title>
    <g id='layer1'>
      <g id='g6224' transform='translate(-16.3779, -20.0431)' >
        <Path onClick={onClick} id='path3227' path={delegaciones['path3227'].path} />
        <Path onClick={onClick} id='path3229' path={delegaciones['path3229'].path} />
        <Path onClick={onClick} id='path3231' path={delegaciones['path3231'].path} />
        <Path onClick={onClick} id='path3233' path={delegaciones['path3233'].path} />
        <Path onClick={onClick} id='path3235' path={delegaciones['path3235'].path} />
        <Path onClick={onClick} id='path3237' path={delegaciones['path3237'].path} />
        <Path onClick={onClick} id='path3239' path={delegaciones['path3239'].path} />
        <Path onClick={onClick} id='path3241' path={delegaciones['path3241'].path} />
        <Path onClick={onClick} id='path3243' path={delegaciones['path3243'].path} />
        <Path onClick={onClick} id='path3245' path={delegaciones['path3245'].path} />
        <Path onClick={onClick} id='path3247' path={delegaciones['path3247'].path} />
        <Path onClick={onClick} id='path3249' path={delegaciones['path3249'].path} />
        <Path onClick={onClick} id='path3251' path={delegaciones['path3251'].path} />
        <Path onClick={onClick} id='path3253' path={delegaciones['path3253'].path} />
        <Path onClick={onClick} id='path3255' path={delegaciones['path3255'].path} />
        <Path onClick={onClick} id='path3257' path={delegaciones['path3257'].path} />
      </g>
      <Text x='149.16301' y='323.62122'><tspan x='149.16301' y='323.62122' className='tSpanClass'>01</tspan></Text>
      <Text x='204.23486' y='149.12231'><tspan x='204.23486' y='149.12231' className='tSpanClass'>02</tspan></Text>
      <Text x='236.95367' y='287.27603'><tspan x='236.95367' y='287.27603' className='tSpanClass'>03</tspan></Text>
      <Text x='249.51794' y='358.66162'><tspan x='249.51794' y='358.66162' className='tSpanClass'>04</tspan></Text>
      <Text x='24.392443' y='382.2196'><tspan x='24.392443' y='382.2196' className='tSpanClass'>05</tspan></Text>
      <Text x='254.38167' y='221.09015'><tspan x='254.38167' y='221.09015' className='tSpanClass'>06</tspan></Text>
      <Text x='299.19098' y='149.12231'><tspan x='299.19098' y='149.12231' className='tSpanClass'>07</tspan></Text>
      <Text x='307.02979' y='267.14124'><tspan x='307.02979' y='267.14124' className='tSpanClass'>08</tspan></Text>
      <Text x='368.87842' y='327.25098'><tspan x='368.87842' y='327.25098' className='tSpanClass'>09</tspan></Text>
      <Text x='96.636963' y='460.74628'><tspan x='96.636963' y='460.74628' className='tSpanClass'>10</tspan></Text>
      <Text x='181.96527' y='221.42999'><tspan x='181.96527' y='221.42999' className='tSpanClass'>11</tspan></Text>
      <Text x='387.72482' y='603.66479'><tspan x='387.72482' y='603.66479' className='tSpanClass'>12</tspan></Text>
      <Text x='445.23666' y='408.91867'><tspan x='445.23666' y='408.91867' className='tSpanClass'>13</tspan></Text>
      <Text x='174.13235' y='534.56128'><tspan x='174.13235' y='534.56128' className='tSpanClass'>14</tspan></Text>
      <Text x='320.3887' y='221.09015'><tspan x='320.3887' y='221.09015' className='tSpanClass'>15</tspan></Text>
      <Text x='324.90353' y='456.03467'><tspan x='324.90353' y='456.03467' className='tSpanClass'>16</tspan></Text>
    </g>
  </svg>
)

CDMXMap.defaultProps = {
  width: '535.87',
  height: '717.42999',
  onClick: f => f
}

export default CDMXMap
