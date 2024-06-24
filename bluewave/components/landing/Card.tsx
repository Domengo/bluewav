import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { CardData } from "../constants/Constants";

interface FeatureCardProps {
  cardData: CardData[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ cardData }) => {
  return (
    <>
      {cardData.map((card: CardData) => (
        <Card key={card.id} className="animate-fade-in-up">
          <CardHeader>
            <Image
              src={card.image}
              alt={card.alt}
              className="mx-auto"
              height={150}
              width={230}
            />
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <CardDescription>
              <div> */}
                <ul className="list-disc pl-4">
                  {card.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              {/* </div>
            </CardDescription> */}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default FeatureCard;