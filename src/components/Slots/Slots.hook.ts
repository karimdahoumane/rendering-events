const useSlots = ({ slots }: { slots: string[] }) => {

  const calculateSlotStyle = () => {
    return {
      height: `${slots.length}%`,
    }
  }

  return { calculateSlotStyle }
}

export default useSlots;