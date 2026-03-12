"use client"

import { fetchFromAPI } from "@/lib/dal/general"
import AppMain from "@/components/layout/app-main"
import PageSection from "@/components/layout/page-section"
import CardList from "@/components/ui/card-list"
import ClassItem from "@/app/classes/class-main/class-item"
import ClassTrainer from "@/app/classes/class-main/class-trainer"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import SpinningLoader from "@/components/ui/spinning-loader"
import SearchBar from "./search-bar"
import { fuzzySearch } from "@/lib/fuzzy-search"

export default function SearchMain() {
    const [classes, setClasses] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = useSearchParams()
    const search = searchParams.get('q')

    useEffect(() => {
        const fetchClasses = async () => {
            const response = await fetchFromAPI("/api/v1/classes")
            setClasses(response);
        };

        const fetchTrainers = async () => {
            const response = await fetchFromAPI("/api/v1/trainers")
            setTrainers(response);
        };
        fetchClasses();
        fetchTrainers();
        setIsLoading(false);
    }, []);

    const filteredClasses = fuzzySearch(search, classes, ["className","trainer.trainerName","classDay"]);
    const filteredTrainers = fuzzySearch(search, trainers, ["trainerName"]);

    const EmptyMessage = () => {
        return <p className="font-inter">Your search did not give any results. Try to search for something else.</p>
    }

    if (isLoading) return <SpinningLoader />

    return (
        <AppMain>
            <PageSection className="pb-0">
                <SearchBar />
            </PageSection>
            <PageSection title={`Classes [${filteredClasses.length}]`}>
                {
                    filteredClasses.length ? (
                        <CardList variant="horizontal">
                            {filteredClasses.map((cl, idx) => (<ClassItem key={idx} data={cl} />))}
                        </CardList>
                    ) : (
                        <EmptyMessage />
                    )
                }

            </PageSection>
            <PageSection title={`Trainers [${filteredTrainers.length}]`}>
                {
                    filteredTrainers.length ? (
                        <CardList >
                            {filteredTrainers.map((cl, idx) => (<ClassTrainer key={idx} data={cl} />))}
                        </CardList>
                    ) : (
                        <EmptyMessage />
                    )
                }
            </PageSection>
        </AppMain>
    )
}


