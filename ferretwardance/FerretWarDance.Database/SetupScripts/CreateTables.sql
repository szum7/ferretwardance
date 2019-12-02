CREATE TABLE [dbo].[TestTable] (
	[Id] int IDENTITY(1, 1) NOT NULL,
	[Name] nvarchar(255) COLLATE Hungarian_CI_AS NOT NULL,
	[OrderNumber] int NULL,
	CONSTRAINT [PK_TESTTABLE_ID] PRIMARY KEY NONCLUSTERED ([Id])
)