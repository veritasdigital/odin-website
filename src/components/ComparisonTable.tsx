import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ComparisonRow {
  feature: string;
  basic: string;
  professional: string;
  enterprise: string;
}

interface ComparisonTableProps {
  title: string;
  description: string;
  rows: ComparisonRow[];
}

export const ComparisonTable = ({ title, description, rows }: ComparisonTableProps) => {
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl text-charcoal">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold text-charcoal">Feature</TableHead>
                <TableHead className="font-semibold text-charcoal text-center">Basic</TableHead>
                <TableHead className="font-semibold text-charcoal text-center bg-primary/5">Professional</TableHead>
                <TableHead className="font-semibold text-charcoal text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/30">
                  <TableCell className="font-medium text-charcoal/90">{row.feature}</TableCell>
                  <TableCell className="text-center text-charcoal/70">{row.basic}</TableCell>
                  <TableCell className="text-center bg-primary/5 text-charcoal/70 font-medium">{row.professional}</TableCell>
                  <TableCell className="text-center text-charcoal/70">{row.enterprise}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
