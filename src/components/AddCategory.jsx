
const AddCategory = ({categories, setCategories, value, setValue }) => {
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value.trim().length<=2) return 
        if(categories.includes(value.trim())) return 
        setCategories([value, ...categories])
        setValue('')

    }
    const onChangeValue = (e) => {
        setValue(e.target.value)
    }
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type="search"
          placeholder="Busca Gifs Animados..."
          value={value}
          onChange={onChangeValue}
        />
      </form>
    </>
  );
};

export default AddCategory;
