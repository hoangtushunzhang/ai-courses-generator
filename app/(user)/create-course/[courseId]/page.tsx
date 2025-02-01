'use client'
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState, useTransition } from 'react'
import { getUserCourseByCourseId } from '../../actions/getCourse';
import { Course } from '@/types';
import HeaderContent from '../../_components/HeaderContent';

type Params = Promise<{ courseId: string }>

const CreateCourseLayoutPage = (props: { params: Params }) => {
    const params = use(props.params);


    const { user } = useUser();

    const [isPending, startTransition] = useTransition();
    const [course, setCourse] = useState<Course>({} as Course);

    const [loading, setLoading] = useState(false);
    const email = user?.primaryEmailAddress?.emailAddress;
    const courseId = params?.courseId;

    useEffect(() => {
        const getCourse = async () => {
            setLoading(true);
            if (!courseId || !email) {
                setLoading(false);
                return;
            }
            try {
                const result = await getUserCourseByCourseId(courseId, email);
                setCourse(result as Course);
            } finally {
                setLoading(false);
            }
        }
    }, [courseId, email])

    return (
        <div>
            <HeaderContent leftsideTitle='Course' rightsideTitle='Layout' />
        </div>
    )
}

export default CreateCourseLayoutPage;