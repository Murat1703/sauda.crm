import LayoutContainer from "@/components/ui/LayoutContainer"
import PageTopContainer from "@/components/ui/PageTopContainer"
import Title from "@/components/ui/Title"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sauda - Сотрудники и роли",
  description: "Сотрудники и роли ",
};


export default function UsersPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Сотрудники и роли"/>
            </PageTopContainer>
        </LayoutContainer>
    )
}