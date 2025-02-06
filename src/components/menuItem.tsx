interface MenuItemProps {
    name: string
    description: string
    calories: number
    price: number
    isHighlighted?: boolean
  }
  
  export function MenuItem({ name, description, calories, price, isHighlighted = false }: MenuItemProps) {
    return (
      <div className="relative pb-6 mb-6 border-b border-dashed border-gray-200">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-2xl font-bold ${isHighlighted ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
            {name}
          </h3>
          <span className="text-2xl font-bold text-[#FF9F0D]">{price}$</span>
        </div>
        <p className="text-gray-600 mb-2 max-w-[57%]">{description}</p>
        <span className="text-gray-400">{calories} CAL</span>
      </div>
    )
  }
  
  