import { CountryInfoCardProps } from "../../util/Interfaces"

export const CountryInfoCard = ({title, value} : CountryInfoCardProps) => {
  return (
    <div className='px-8 py-4 border-t border-gray-700'>
            <div className='flex justify-between'>
                <div className='text-zinc-400'>{title}</div>
                <div className='text-zinc-200'>{value}</div>
            </div>
    </div>
  )
}
