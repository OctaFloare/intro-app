import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const UpdateCharacterSchema = z.object({
    name: z.string()
        .min(5, "Name must be at least 5 characters long")
        .max(20, "Name must be at most 20 characters long")
        .refine((name) => name?.[0] === name?.[0]?.toUpperCase(), "Name must start with an uppercase letter")
    .nonoptional(),
    species: z.string()
    .min(1, "Species must be at least 1 character long")
    .nonoptional(),
    gender: z.union([z.undefined(), z.string()]),
    origin: z.object({
        name: z.string().nonoptional(),
        dimension: z.string().nonoptional(),
    }).nonoptional()
})

type UpdateForm = z.infer<typeof UpdateCharacterSchema>

export const UpdateCharacter = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateForm>({
        resolver: zodResolver(UpdateCharacterSchema)
    });

    const [submitted, setSubmitted] = useState<UpdateForm | null>(null);

    const onValid = (data: UpdateForm) => {
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
        <input {...register("name")} />


        {errors.name && <div style={{ color: "red" }}>{errors.name.message}</div>}

        <label>Character Species</label>
        <input {...register("species")} />

        {errors.species && <div style={{ color: "red" }}>{errors.species.message}</div>}

        <label>Character Gender</label>
        <input {...register("gender"), { required: true }} />

        {errors.gender && <div style={{ color: "red" }}>{errors.gender.message}</div>}

        <label>Character Origin (name)</label>
        <input {...register("origin.name")} />

        <label>Character Origin (dimension)</label>
        <input {...register("origin.dimension")} />

        <label></label>
        <button 
            type="submit"
            style={{ width: "100px", height: "50px"}}
            >Update</button>

    {submitted && (
    <div>
        <div>Name: {submitted.name}</div>
        <div>Species: {submitted.species}</div>
        <div>Gender: {submitted.gender}</div>
        <div>Origin: {submitted?.origin?.name}</div>
        <div>Origin Dimension: {submitted?.origin?.dimension}</div>
    </div>
    )}
    </form>
    
}
