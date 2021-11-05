/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Section, Wrap } from './styled';
import Postcards from '../../ProjectsCards/Postcards/Postcards';
import { Data, Row } from './type';

const PostcardSection = () => {
    const [allProjects, setAllProjects] = useState<Array<Row>>([]);

    const getAllProjects = async () => {
        try {
            const response = await axios.get<Data>(
                'http://localhost:4000/projects',
                { withCredentials: true }
            );
            setAllProjects(response.data.projects.rows);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getAllProjects();
    }, []);

    return (
        <Section>
            <Wrap>
                <Postcards projects={allProjects} />
            </Wrap>
        </Section>
    );
};

export default PostcardSection;