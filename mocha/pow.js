function pow(numb,p)
{
	let result = 1;
	if(numb > 1)
	{	
		for(let i = 1 ;i <= p  ;i++)
		{
			result *= numb;
		}
	 return result;
		
	}
	else
	{
		return 1;
	}
}
