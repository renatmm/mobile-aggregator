import { useState } from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Tooltip } from '@chakra-ui/react'

export default function ValueSlider({change, maxValue}) {

  const [sliderValue, setSliderValue] = useState(5)
  const [showTooltip, setShowTooltip] = useState(false)

  const customOnChange = (v) => {
    setSliderValue(v)
    change(v)
  }

  return (
    <Slider
      id='slider'
      defaultValue={5}
      min={0}
      max={maxValue}
      colorScheme='blue'
      onChange={customOnChange}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={0} mt='1' ml='-1' fontSize='sm'>
        0
      </SliderMark>
      <SliderMark value={maxValue/2} mt='1' ml='-2.5' fontSize='sm'>
        {maxValue/2}
      </SliderMark>
      <SliderMark value={maxValue} mt='1' ml='-5' fontSize='sm'>
        {maxValue}
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='blue.500'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}
  
  