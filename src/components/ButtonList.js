import Button from "./Button"

const list = ["All","Game","Songs","Live","Soccer","Cricket","Cooking","Valentines"];
const ButtonList = () => {

  return (
    <div className="flex">
      {list.map((categories) => 
        <Button 
          key={categories}
          name={categories}
        />
      )}
    </div>
  )
}

export default ButtonList;