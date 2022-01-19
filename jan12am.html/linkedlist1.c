#include <stdio.h>
#include <stdlib.h>
int null;
struct queue
{
  int info;
  struct queue*next;

};
struct queue*front,*rear;
void enqueue();
void dequeue();
void display();

int main()
{

    front=null;
    rear=null;
int choice;     
    while(1)
    {
        printf("\n1.enqueue\n2.dequeue\n3.display\n4.exit\n");
        printf("enter your choice");
        scanf("%d",&choice);
        switch (choice)
        {
            case 1: enqueue();
                    break;
            case 2: dequeue();
                    break;
            case 3: display();
                    break;
            case 4: exit(0);
                    break;
            default : printf("you have entered wrong choice");

        }   
     }
}

void enqueue()
{
    struct queue*temp;
    temp=(struct queue*)malloc(sizeof(struct queue));
    printf("enter the element");
    scanf("%d",&temp->info);
    temp -> next = null;
    if(rear==null)
    {
        front=temp;
    }
    else
    {
    rear -> next= temp;
    }
    rear=temp;
}

void dequeue()
{
    struct queue*temp;
    if(front==null)
    {
        printf("queue is empty");
        return;
    }
    temp=front;
    printf("deleted element =%d",temp->info);
    front=temp->next;
    if(front==null)
    rear=null;
    free (temp);
}

void display()
{
    struct queue*ptr;
    if(front==null)
    {
        printf("queue is empty");
        return;
    }
    printf("element of queue are :");
    for(ptr=front;ptr!=null;ptr=ptr->next)
    {
        printf("%d",ptr->info);
    }

}