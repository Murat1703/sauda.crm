'use client'

import Button from "@/components/ui/Button";
import { PlusIcon } from "@/components/ui/icons";
import LayoutContainer from "@/components/ui/LayoutContainer";
import PageTopContainer from "@/components/ui/PageTopContainer";
import Title from "@/components/ui/Title";
import LeadsList from "./_components/LeadsList";
import { leadsMock } from "./mockData";
import { useRouter } from "next/navigation";


export default function LeadsPage(){
  const router = useRouter();
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Заявки"/>
                <Button variant="topBtn" onClick={()=>router.push("/leads/create")}>
                    <PlusIcon />
                    <p>Создать заявку</p>
                </Button>
            </PageTopContainer>
            <LeadsList leads={leadsMock}/>
        </LayoutContainer>
    )
}