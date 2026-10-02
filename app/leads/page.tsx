import Button from "@/components/ui/Button";
import { PlusIcon } from "@/components/ui/icons";
import LayoutContainer from "@/components/ui/LayoutContainer";
import PageTopContainer from "@/components/ui/PageTopContainer";
import Title from "@/components/ui/Title";
import LeadsList from "./_components/LeadsList";
import { leadsMock } from "./mockData";

export default function LeadsPage(){

    console.log(leadsMock)

    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Заявки"/>
                <Button variant="topBtn">
                    <PlusIcon />
                    <p>Создать заявку</p>
                </Button>
            </PageTopContainer>
            <LeadsList leads={leadsMock}/>
        </LayoutContainer>
    )
}