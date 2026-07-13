import { useState } from "react";
import { useForm } from "react-hook-form";

type UpdateCharacterForm = {
    name: string,
    species: string,
    gender: string,
    origin: {
        name: string,
        dimension: string,
    }
}

export const UpdateCharacter = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateCharacterForm>();

    const [submitted, setSubmitted] = useState<UpdateCharacterForm | null>(null);

    const onValid = (data: UpdateCharacterForm) => {
        setSubmitted(data)
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

        <label>Character Species</label>
        <input {...register("species")} />

        <label>Character Gender</label>
        <input {...register("gender")} />

        <label>Character Origin (name)</label>
        <input {...register("origin.name")} />

        <label>Character Origin (dimension)</label>
        <input {...register("origin.dimension")} />

        <label></label>
        <button type="submit">Update</button>

    {submitted && (
    <div>
        <div>Name: {submitted.name}</div>
        <div>Species: {submitted.species}</div>
        <div>Gender: {submitted.gender}</div>
        <div>Origin: {submitted.origin.name}</div>
        <div>Origin Dimension: {submitted.origin.dimension}</div>
    </div>
    )}
    </form>
    
}
