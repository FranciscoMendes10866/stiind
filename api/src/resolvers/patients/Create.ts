import {
    Resolver, Query, Mutation, Arg, Authorized,
} from 'type-graphql'

import { CreateInput } from './create/CreateInput'
import { Patients } from '@entity/Patients'

@Resolver()
export class CreatePatientResolver {
    @Authorized()
    @Mutation(() => Patients)
    async CreatePatient(
        @Arg('data') {
            first_name,
            last_name,
            age,
            gender,
            maritual_status,
            picture,
            location,
            caregiver_id,
            relative_id
        }: CreateInput,
    ): Promise<Patients> {

        const patient = await Patients.create({
            first_name,
            last_name,
            age,
            gender,
            maritual_status,
            picture,
            location,
            caregiver_id,
            relative_id
        }).save()

        return patient
    }
}
