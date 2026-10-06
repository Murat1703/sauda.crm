import LayoutContainer from "@/components/ui/LayoutContainer";
import PageTopContainer from "@/components/ui/PageTopContainer";
import Title from "@/components/ui/Title";
import ApprovalsList from "./_components/ApprovalsList";
import { approvalsMock } from "../leads/mockData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sauda - Согалосвания",
  description: "Согласования",
};

export default function ApprovalsPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Согласования"/>
            </PageTopContainer>
            <ApprovalsList approvalsList={approvalsMock}/>
           
        </LayoutContainer>
    )
}