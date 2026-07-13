import { useForm } from "react-hook-form";

export const UpdateCharacter = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onValid = () => {
        console.log("Form is valid");
    }

    const onInvalid = () => {
        console.log("Form is invalid");
    }

    return <form className="update-form"
            onSubmit={handleSubmit(onValid, onInvalid)}>
        <div>Form to update a character</div>
        <label>Character Name</label>
        <input {...register("name", { required: true })} />
        {errors.name && <div style={{ color: "red" }}>Name is required</div>}
        <label>Character Age</label>
        <input {...register("age")} />
        <button type="submit">Update</button>
    </form>
}
