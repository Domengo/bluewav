import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CardData } from "../constants/Constants";

interface FeatureCardProps {
  cardData: CardData[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ cardData }) => {
  return (
    <>
      {cardData.map((card: CardData) => (
        <Card key={card.id} className="animate-fade-in-up flex ">
          <CardHeader >
            <Image
              src={card.image}
              alt={card.alt}
              className="rounded-lg"
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
